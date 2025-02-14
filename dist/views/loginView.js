import { encryptText } from "../utils/stringManager.js";
import { login } from "../utils/sessionManager.js";
import { secrets } from "../libs/secrets.js";
export function loginView(loginPage, mainPage, spinner) {
    const loginForm = document.getElementById("login-form");
    const invalidPassword = document.getElementById("invalid-password");
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const passwordInput = document.getElementById("password")?.value;
        const encryptedInput = await encryptText(passwordInput);
        if (!secrets.length || secrets[0] !== encryptedInput) {
            invalidPassword?.classList.remove("hidden");
            return;
        }
        handleLogin(loginPage, mainPage, spinner);
    });
}
function handleLogin(loginPage, mainPage, spinner) {
    login();
    loginPage.classList.add("hidden");
    spinner.classList.remove("hidden");
    setTimeout(() => {
        spinner.classList.add("hidden");
        mainPage.classList.remove("hidden");
    }, imitateLoadTime());
}
function imitateLoadTime() {
    return Math.floor(Math.random() * 2000) + 1000;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5WaWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZpZXdzL2xvZ2luVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU3QyxNQUFNLFVBQVUsU0FBUyxDQUFDLFNBQXNCLEVBQUUsUUFBcUIsRUFBRSxPQUFvQjtJQUN6RixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBb0IsQ0FBQztJQUMzRSxNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFnQixDQUFDO0lBRW5GLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzdDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixNQUFNLGFBQWEsR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBc0IsRUFBRSxLQUFLLENBQUM7UUFDdkYsTUFBTSxjQUFjLEdBQUcsTUFBTSxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUE7UUFFdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLGNBQWMsRUFBRSxDQUFDO1lBQ25ELGVBQWUsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLE9BQU87UUFDWCxDQUFDO1FBRUQsV0FBVyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsU0FBc0IsRUFBRSxRQUFxQixFQUFFLE9BQW9CO0lBQ3BGLEtBQUssRUFBRSxDQUFDO0lBQ1IsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNaLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQzFCLENBQUM7QUFFRCxTQUFTLGVBQWU7SUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDbkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVuY3J5cHRUZXh0IH0gZnJvbSBcIi4uL3V0aWxzL3N0cmluZ01hbmFnZXIuanNcIjtcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSBcIi4uL3V0aWxzL3Nlc3Npb25NYW5hZ2VyLmpzXCI7XG5pbXBvcnQgeyBzZWNyZXRzIH0gZnJvbSBcIi4uL2xpYnMvc2VjcmV0cy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9naW5WaWV3KGxvZ2luUGFnZTogSFRNTEVsZW1lbnQsIG1haW5QYWdlOiBIVE1MRWxlbWVudCwgc3Bpbm5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLWZvcm1cIikgYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgIGNvbnN0IGludmFsaWRQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW52YWxpZC1wYXNzd29yZFwiKSBhcyBIVE1MRWxlbWVudDtcblxuICAgIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpPy52YWx1ZTtcbiAgICAgICAgY29uc3QgZW5jcnlwdGVkSW5wdXQgPSBhd2FpdCBlbmNyeXB0VGV4dChwYXNzd29yZElucHV0KVxuXG4gICAgICAgIGlmICghc2VjcmV0cy5sZW5ndGggfHwgc2VjcmV0c1swXSAhPT0gZW5jcnlwdGVkSW5wdXQpIHtcbiAgICAgICAgICAgIGludmFsaWRQYXNzd29yZD8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhbmRsZUxvZ2luKGxvZ2luUGFnZSwgbWFpblBhZ2UsIHNwaW5uZXIpXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUxvZ2luKGxvZ2luUGFnZTogSFRNTEVsZW1lbnQsIG1haW5QYWdlOiBIVE1MRWxlbWVudCwgc3Bpbm5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBsb2dpbigpO1xuICAgIGxvZ2luUGFnZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIHNwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc3Bpbm5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH0sIGltaXRhdGVMb2FkVGltZSgpKTtcbn1cblxuZnVuY3Rpb24gaW1pdGF0ZUxvYWRUaW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwMDApICsgMTAwMDtcbn0iXX0=