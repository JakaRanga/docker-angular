using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace back
{
    public class Profile
    {
        [Key]
        public int Id { get; set; }
        public string name { get; set; }
        public string title { get; set; }
        public string catchphrase { get; set; }
        public string birthdate { get; set; }
        public string nationality { get; set; }
        public string localisation { get; set; }
        public DateTime creationDate { get; set; }
        public List<Contact> contacts { get; set; }
        public List<Experience> experiences { get; set; }
        public List<Education> educations { get; set; }
        public List<Skill> skills { get; set; }
        public List<Language> languages { get; set; }
    }

    public class Contact
    {
        [Key]
        public int contactID { get; set; }
        public string name { get; set; }
        public string value { get; set; }

        public int profileID { get; set; }
        public Profile Profile { get; set; }
    }

    public class Experience
    {
        [Key]
        public int experienceID { get; set; }
        public string title { get; set; }
        public string subtitle { get; set; }
        public string description { get; set; }
        public string date { get; set; }

        public int profileID { get; set; }
        public Profile Profile { get; set; }
    }

    public class Education
    {
        [Key]
        public int educationID { get; set; }
        public string title { get; set; }
        public string subtitle { get; set; }
        public string date { get; set; }

        public int profileID { get; set; }
        public Profile Profile { get; set; }
    }

    public class Skill
    {
        [Key]
        public int skillID { get; set; }
        public string name { get; set; }
        public int knowledge { get; set; }

        public int profileID { get; set; }
        public Profile Profile { get; set; }
    }

    public class Language
    {
        [Key]
        public int languageID { get; set; }
        public string type { get; set; }
        public int level { get; set; }

        public int profileID { get; set; }
        public Profile Profile { get; set; }
    }

}
