/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function (n, ord) {
      var s = String(n).split("."),
        v0 = !s[1];
      if (ord) return "other";
      return n == 1 && v0 ? "one" : "other";
    },
  },
  messages: {
    "Access Code": "Berechtigungscode",
    Action: "Aktion",
    "All fields are required.": "Alle Felder sind Pflichtfelder.",
    "An error occurred": "Es ist ein Fehler aufgetreten",
    "An unknown error occurred, please reload the page.":
      "Ein unbekannter Fehler ist aufgetreten, bitte Seite neu laden.",
    "Appointment for the {0}, {1} has been booked": function (a) {
      return ["Termin f\xFCr den ", a("0"), ", ", a("1"), " wurde gebucht"];
    },
    "Asymptomatische Beschwerden": "Asymptomatische Beschwerden",
    "Book Appointment": "Termin Buchen",
    "Book appointments": "Termine Buchen",
    "Booked at": "Gebucht am",
    Booking: "Terminbuchung",
    BookingInfos: "Buchungsdaten",
    Cancel: "Abbrechen",
    "Change password:": "Passwort \xE4ndern:",
    "Choose an appointment": "W\xE4hlen Sie einen Termin aus",
    City: "Ort",
    "Current password": "Aktuelles Passwort",
    "Currently <0><1>no Appointments</1></0> are free.":
      "Aktuell sind <0><1>keine Termine</1></0> mehr frei.",
    Date: "Datum",
    "Date of Appointment": "Datum des Termins",
    DayOfBirth: "Geburtsdatum",
    "Deleting the appointment did not work. Please contact your administrator.":
      "Das l\xF6schen der Buchung hat nicht funktioniert, bitte kontaktieren Sie ihren Administrator.",
    "Do you really want to delete this booking? This cannot be undone.":
      "Wollen Sie die Buchung wirklich l\xF6schen? Dies kann nicht r\xFCckg\xE4ngig gemacht werden.",
    "Enter the information for the {0}, {1}": function (a) {
      return ["Tragen Sie die Daten f\xFCr den ", a("0"), ", ", a("1"), " ein"];
    },
    Excel: "Excel",
    "Free appointments": "Freie Termine",
    From: "Von",
    "Given Name": "Vorname",
    "Home Address": "Privatanschrift",
    "In order to book more appointments, contact":
      "Um mehr Termine vergeben zu k\xF6nnen wenden Sie sich an",
    "Logged in as user:": "Eingeloggt als: ",
    Logout: "Logout",
    "Mobile No.": "Handynummer",
    "My appointments": "Meine Buchungen",
    "New password": "Neues Passwort",
    "Notify the patient of their access code:":
      "Teilen Sie dem Patienten jetzt den Berechtigungscode mit:",
    Office: "Einrichtung (Klinik/Station/Abteilung)",
    Password: "Passwort: ",
    "Please contact": "Kontaktieren Sie",
    PostCode: "Postleitzahl",
    Print: "Drucken",
    Reason: "Grund des Tests",
    "Reiser\xFCckkehrer aus Ausland": "Reiser\xFCckkehrer aus Ausland",
    "Repeat new password": "Neues Passwort wiederholen",
    Save: "Speichern",
    "Saving...": "Wird gespeichert...",
    Settings: "Einstellungen",
    Street: "Stra\xDFe",
    StreetNumber: "Hausnummer",
    Surname: "Nachname",
    "The appointment is no longer available, please select another free appointment.":
      "Leider ist der Termin inzwischen nicht mehr buchbar, bitte einen anderen Termin w\xE4hlen.",
    "The navigation in the table is possible with Tab and Enter keys.":
      "In der Tabelle kann mit Tab und Enter navigiert werden.",
    "The password has been changed. You are going to be logged out and can log in with the new password.":
      "Das Passwort wurde ge\xE4ndert. Sie werden ausgeloggt und k\xF6nnen sich mit dem neuen Passwort einloggen.",
    "The passwords do not match!": "Die Passw\xF6rter sind nicht identisch!",
    "This input is required.": "Dies ist ein Pflichtfeld.",
    Timeslot: "Terminslot",
    To: "Bis",
    Username: "Benutzername: ",
    "Wrong username or password": "Falscher Benutzername oder Passwort",
    "{coupons, plural, =0 {You can book} =1 {You can still book} other {You can still book}}<0><1>{coupons, plural, =0 {no appointment} =1 {one appointment} other {# appointments}}</1></0>{coupons, plural, =0 {anymore} =1 {} other {}}": function (
      a
    ) {
      return [
        a("coupons", "plural", {
          0: "Sie k\xF6nnen",
          1: "Sie k\xF6nnen noch",
          other: "Sie k\xF6nnen noch",
        }),
        " <0><1>",
        a("coupons", "plural", {
          0: "keinen Termin",
          1: "einen Termin",
          other: ["#", " Termine"],
        }),
        "</1></0> ",
        a("coupons", "plural", {
          0: "mehr buchen",
          1: "buchen",
          other: "buchen",
        }),
      ];
    },
  },
};
