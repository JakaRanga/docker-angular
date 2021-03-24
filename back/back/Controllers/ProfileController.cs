using back.Database;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProfileController : ControllerBase
    {
        private readonly ILogger<ProfileController> _logger;

        public ProfileController(ILogger<ProfileController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var db = new ProfileDBContext();


            var profile = db.Profile
                .OrderByDescending(x => x.creationDate).Select(x => new
                {
                    profile = new
                    {
                        x.Id,
                        x.name,
                        x.title,
                        x.catchphrase,
                        x.birthdate,
                        x.localisation,
                        x.nationality,
                    },

                    x.experiences,
                    x.languages,
                    x.contacts,
                    x.skills,
                    x.educations,
                }).FirstOrDefault();

            return new JsonResult(profile);
        }
    }
}
