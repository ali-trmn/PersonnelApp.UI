using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PersonnelApp.UI.Models;

namespace PersonnelApp.UI.Controllers
{
    public class LoginController : Controller
    {
        [AllowAnonymous]
        public IActionResult Index()
        {
            return View();
        }



        //[HttpPost]
        //[AllowAnonymous]
        //public IActionResult Index(Admin a)
        //{
        //    HttpContext.Session.SetString("username", "testlogin");
        //    return RedirectToAction("Index", "Home");
        //}
    }
}
