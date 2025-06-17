import csv
import json
import random
import sys
from chardet import detect

def detect_encoding(file_path):
    with open(file_path, 'rb') as f:
        rawdata = f.read()
    return detect(rawdata)['encoding']

def generate_questions(csv_file):
    questions = []
    
    # Detect file encoding
    try:
        encoding = detect_encoding(csv_file)
        print(f"Detected encoding: {encoding}")
    except Exception as e:
        print(f"Error detecting encoding: {e}")
        encoding = 'utf-8'  # fallback
    
    with open(csv_file, mode='r', encoding=encoding) as file:
        reader = csv.DictReader(file)
        
        # Print detected headers for debugging
        if not reader.fieldnames:
            print("Error: No headers found or empty file")
            sys.exit(1)
        print("Detected headers:", reader.fieldnames)
        
        # Case-insensitive header matching
        headers_lower = [h.lower().strip() for h in reader.fieldnames]
        
        # Find our target columns
        romaji_col = None
        english_col = None
        
        for header in reader.fieldnames:
            header_lower = header.lower().strip()
            if 'romaji' in header_lower or 'romanji' in header_lower or 'rōmaji' in header_lower:
                romaji_col = header
            elif 'english' in header_lower or 'eng' in header_lower or 'meaning' in header_lower:
                english_col = header
        
        if not romaji_col:
            print("Error: Couldn't identify romaji column. Available columns:", reader.fieldnames)
            sys.exit(1)
        if not english_col:
            print("Error: Couldn't identify english column. Available columns:", reader.fieldnames)
            sys.exit(1)
        
        print(f"Using columns - Romaji: '{romaji_col}', English: '{english_col}'")
        
        for i, row in enumerate(reader, start=1):
            try:
                romaji = row[romaji_col].strip()
                english = row[english_col].strip()
                
                if not romaji or not english:
                    continue
                
                # Handle multiple answers (split by comma/slash)
                romaji_answers = [r.strip() for r in romaji.split(',')] if ',' in romaji else [romaji]
                english_answers = [e.strip() for e in english.split(',')] if ',' in english else [english]
                
                if random.choice([True, False]):
                    question = f"What is the English meaning of '{romaji_answers[0]}'?"
                    answer = english_answers
                else:
                    question = f"What is the Romaji for '{english_answers[0]}'?"
                    answer = romaji_answers
                
                questions.append({
                    "QuestionID": f"Q{i}",
                    "Subject": "Nihongo Vocabulary",
                    "Difficulty": "Easy",
                    "QuestionType": "Identification",
                    "Question": question,
                    "Answer": answer if len(answer) > 1 else answer[0]
                })
            except KeyError as e:
                print(f"Warning: Missing column in row {i}: {e}")
                continue
    
    return questions

if __name__ == "__main__":
    csv_filename = "vocabulary.csv"  # Change to your CSV path
    
    try:
        questions = generate_questions(csv_filename)
        
        output_json = "nihongovocabulary.json"
        with open(output_json, 'w', encoding='utf-8') as f:
            json.dump(questions, f, indent=2, ensure_ascii=False)
        
        print(f"Success! Generated {len(questions)} questions in {output_json}")
        
    except Exception as e:
        print(f"Failed to process: {str(e)}")
        print("Please check:")
        print("1. File exists and is accessible")
        print("2. File is a proper CSV with headers")
        print("3. File contains 'romaji' and 'english' columns (or similar)")