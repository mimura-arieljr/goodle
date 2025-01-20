import { loginView } from "./views/loginView.js";
import { mainView } from "./views/mainView.js";
import { settingsView } from "./views/settingsView.js";
document.addEventListener("DOMContentLoaded", () => {
    const mainPage = document.getElementById("main-page");
    const loginPage = document.getElementById("login-page");
    const settingsPage = document.getElementById("settings-page");
    const questionsPage = document.getElementById("questions-page");
    const spinner = document.getElementById("spinner");
    mainView(mainPage, settingsPage, questionsPage);
    loginView(loginPage, mainPage, spinner);
    settingsView(settingsPage, mainPage);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUMvQyxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBZ0IsQ0FBQztJQUNyRSxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBZ0IsQ0FBQztJQUN2RSxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBZ0IsQ0FBQztJQUM3RSxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFnQixDQUFDO0lBQy9FLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFnQixDQUFDO0lBRWxFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELFNBQVMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLFlBQVksQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2dpblZpZXcgfSBmcm9tIFwiLi92aWV3cy9sb2dpblZpZXcuanNcIjtcbmltcG9ydCB7IG1haW5WaWV3IH0gZnJvbSBcIi4vdmlld3MvbWFpblZpZXcuanNcIjtcbmltcG9ydCB7IHNldHRpbmdzVmlldyB9IGZyb20gXCIuL3ZpZXdzL3NldHRpbmdzVmlldy5qc1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tcGFnZVwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBsb2dpblBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLXBhZ2VcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3Qgc2V0dGluZ3NQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXR0aW5ncy1wYWdlXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IHF1ZXN0aW9uc1BhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXN0aW9ucy1wYWdlXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwaW5uZXJcIikgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBtYWluVmlldyhtYWluUGFnZSwgc2V0dGluZ3NQYWdlLCBxdWVzdGlvbnNQYWdlKTtcbiAgICBsb2dpblZpZXcobG9naW5QYWdlLCBtYWluUGFnZSwgc3Bpbm5lcik7XG4gICAgc2V0dGluZ3NWaWV3KHNldHRpbmdzUGFnZSwgbWFpblBhZ2UpO1xufSk7Il19