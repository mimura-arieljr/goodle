import { sessionView } from "./views/sessionView.js";
import { loginView } from "./views/loginView.js";
import { mainView } from "./views/mainView.js";
import { settingsView } from "./views/settingsView.js";
import { subjectsView } from "./views/subjectsView.js";
document.addEventListener("DOMContentLoaded", () => {
    const mainPage = document.getElementById("main-page");
    const loginPage = document.getElementById("login-page");
    const settingsPage = document.getElementById("settings-page");
    const subjectsPage = document.getElementById("subjects-page");
    const spinner = document.getElementById("spinner");
    sessionView(loginPage, mainPage);
    mainView(mainPage, settingsPage, subjectsPage);
    loginView(loginPage, mainPage, spinner);
    settingsView(settingsPage, mainPage);
    subjectsView(mainPage, subjectsPage);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQy9DLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFnQixDQUFDO0lBQ3JFLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFnQixDQUFDO0lBQ3ZFLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFnQixDQUFDO0lBQzdFLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFnQixDQUFDO0lBQzdFLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFnQixDQUFDO0lBRWxFLFdBQVcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakMsUUFBUSxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDL0MsU0FBUyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDeEMsWUFBWSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNyQyxZQUFZLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2Vzc2lvblZpZXcgfSBmcm9tIFwiLi92aWV3cy9zZXNzaW9uVmlldy5qc1wiO1xuaW1wb3J0IHsgbG9naW5WaWV3IH0gZnJvbSBcIi4vdmlld3MvbG9naW5WaWV3LmpzXCI7XG5pbXBvcnQgeyBtYWluVmlldyB9IGZyb20gXCIuL3ZpZXdzL21haW5WaWV3LmpzXCI7XG5pbXBvcnQgeyBzZXR0aW5nc1ZpZXcgfSBmcm9tIFwiLi92aWV3cy9zZXR0aW5nc1ZpZXcuanNcIjtcbmltcG9ydCB7IHN1YmplY3RzVmlldyB9IGZyb20gXCIuL3ZpZXdzL3N1YmplY3RzVmlldy5qc1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tcGFnZVwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBsb2dpblBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLXBhZ2VcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3Qgc2V0dGluZ3NQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXR0aW5ncy1wYWdlXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IHN1YmplY3RzUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3ViamVjdHMtcGFnZVwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGlubmVyXCIpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgc2Vzc2lvblZpZXcobG9naW5QYWdlLCBtYWluUGFnZSk7XG4gICAgbWFpblZpZXcobWFpblBhZ2UsIHNldHRpbmdzUGFnZSwgc3ViamVjdHNQYWdlKTtcbiAgICBsb2dpblZpZXcobG9naW5QYWdlLCBtYWluUGFnZSwgc3Bpbm5lcik7XG4gICAgc2V0dGluZ3NWaWV3KHNldHRpbmdzUGFnZSwgbWFpblBhZ2UpO1xuICAgIHN1YmplY3RzVmlldyhtYWluUGFnZSwgc3ViamVjdHNQYWdlKTtcbn0pOyJdfQ==