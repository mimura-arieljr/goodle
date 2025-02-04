import { logout, isSessionValid } from "../utils/sessionManager.js";
export function sessionView(loginPage, mainPage) {
    if (isSessionValid()) {
        handleActiveSession(loginPage, mainPage);
    }
    // Check session when user switches back to the tab
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible" && !isSessionValid()) {
            logout();
        }
    });
    // Check session when the tab gains focus
    window.addEventListener("focus", () => {
        if (!isSessionValid()) {
            logout();
        }
    });
}
function handleActiveSession(loginPage, mainPage) {
    loginPage.classList.add("hidden");
    mainPage.classList.remove("hidden");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvblZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmlld3Mvc2Vzc2lvblZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVwRSxNQUFNLFVBQVUsV0FBVyxDQUFDLFNBQXNCLEVBQUUsUUFBcUI7SUFDckUsSUFBSSxjQUFjLEVBQUUsRUFBRSxDQUFDO1FBQ25CLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsbURBQW1EO0lBQ25ELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7UUFDL0MsSUFBSSxRQUFRLENBQUMsZUFBZSxLQUFLLFNBQVMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUM7WUFDOUQsTUFBTSxFQUFFLENBQUM7UUFDYixDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCx5Q0FBeUM7SUFDekMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDbEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUM7WUFDcEIsTUFBTSxFQUFFLENBQUM7UUFDYixDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxTQUFzQixFQUFFLFFBQXFCO0lBQ3RFLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3hDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2dvdXQsIGlzU2Vzc2lvblZhbGlkIH0gZnJvbSBcIi4uL3V0aWxzL3Nlc3Npb25NYW5hZ2VyLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXNzaW9uVmlldyhsb2dpblBhZ2U6IEhUTUxFbGVtZW50LCBtYWluUGFnZTogSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAoaXNTZXNzaW9uVmFsaWQoKSkge1xuICAgICAgICBoYW5kbGVBY3RpdmVTZXNzaW9uKGxvZ2luUGFnZSwgbWFpblBhZ2UpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIHNlc3Npb24gd2hlbiB1c2VyIHN3aXRjaGVzIGJhY2sgdG8gdGhlIHRhYlxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJ2aXNpYmxlXCIgJiYgIWlzU2Vzc2lvblZhbGlkKCkpIHtcbiAgICAgICAgICAgIGxvZ291dCgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDaGVjayBzZXNzaW9uIHdoZW4gdGhlIHRhYiBnYWlucyBmb2N1c1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoIWlzU2Vzc2lvblZhbGlkKCkpIHtcbiAgICAgICAgICAgIGxvZ291dCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUFjdGl2ZVNlc3Npb24obG9naW5QYWdlOiBIVE1MRWxlbWVudCwgbWFpblBhZ2U6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgbG9naW5QYWdlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbn0iXX0=