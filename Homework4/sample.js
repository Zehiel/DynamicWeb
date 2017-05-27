// Tworzymy modu� aplikacji
var myApp = angular.module('reminderApp', []);
// Tworzymy kotroler ReminderCtrl
myApp.controller('ReminderCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {  

// tworzymy model
  if ($window.localStorage.getItem('reminders') == null) $scope.reminders = [];
else $scope.reminders = JSON.parse($window.localStorage.getItem('reminders'));
$scope.newReminder = {};

  for (var i = 0; i < $scope.reminders.length; i++) {
    startTimer($scope.reminders[i], true);
}

Notification.requestPermission();

function notifyMe(message) {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Przypomnienie! " + message);
  }
  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Przypomnienie! " + message);
      }
    });
  }
}

function startTimer(someReminder, isFirstTime) {
	var msMinute = 60 * 1000;
  var date = new Date(someReminder.date);
	var dateNow = new Date();
	if (date < dateNow) {
		if(!isFirstTime) alert("Ten termin juz minal!")
		return;
	}
  if (date - dateNow - someReminder.remind * msMinute < 1) {
		if(!isFirstTime) alert("Do wydarzenia zostalo mniej czasu niz podano w przypomnieniu!");
		return;
	}
  someReminder.timeOut = setTimeout(function() {
    notifyMe(someReminder.name);
    alert("Termin nadchodzi! " + someReminder.name);
  }, (date - dateNow - someReminder.remind * msMinute));
}

function saveReminders() {
  $window.localStorage.setItem('reminders', JSON.stringify($scope.reminders));
  $scope.reminders = JSON.parse($window.localStorage.getItem('reminders'));
}

  $scope.addReminder = function () {
  
  var allCorrect = true;
  var newReminder = $scope.newReminder;
  if (Object.values(newReminder).length === 4) {
    for (let value of Object.values(newReminder)) { (value === undefined) ? allCorrect = false : "" } 
  } else {
    allCorrect = false;
  }  
    
  if (allCorrect === true) {
    newReminder.state = "normal";
    newReminder.index = $scope.reminders.length;
    $scope.reminders.push(newReminder);
    startTimer(newReminder, false);
    saveReminders();
    $scope.newReminder = {};
  } else {
    alert("Wszystkie pola muszą być wypełnione!");
  }  
  
};  

$scope.deleteReminder = function(reminder) {
  $scope.reminders.splice(reminder.index, 1); 
   _setIndexes();
   clearTimeout(reminder.timeOut);
   saveReminders();
};  

  $scope.editReminder = function (reminder) {
    reminder.oldName = reminder.name;
    reminder.oldDescription = reminder.description;
    reminder.oldDate = reminder.date;
    reminder.oldRemind = reminder.remind;
    reminder.state = "edit";
    saveReminders();
  };

  $scope.saveReminder = function(reminder) {
    reminder.state = "normal"; 
    saveReminders();
    startTimer(reminder, false);
  }; 

  $scope.cancelEdit = function (reminder) { 
    reminder.name = reminder.oldName; 
    reminder.description = reminder.oldDescription;
    reminder.date = reminder.oldDate;
    reminder.remind = reminder.oldRemind;
    reminder.state = "normal";
	  saveReminders();
	}; 

 // metody prywatne
function _setIndexes() { 
   $scope.reminders.forEach(function(reminder, index) {
      reminder.index = index; 
});  }}]);
