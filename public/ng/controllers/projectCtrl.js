var projects = [
  {
    "name": "lunar-new-year-2014",
    "title": "Lunar New Year 2014",
    "categories": ["print-design"],
    "deliverables": ["postcard"],
    "shortDesc": "The Cross Cultural Centers Lunar New Year Celebration in Cal State L.A.",
    "description": "Publicity for the Cross Cultural Centers Lunar New Year Celebration, heavily asian themed, from the graphic elements to the color scheme."
  },
  {
    "name": "eagle-con",
    "title": "Eagle Con",
    "categories": ["print-design"],
    "deliverables": ["poster", "postcard", "tshirt", "button"],
    "shortDesc": "Cal State L.A.’s very own sci-fi/comic book convention: Eagle-Con",
    "description": "Printed materials for the publicity and schedule of events for Cal State L.A.’s very own sci-fi/comic book convention: Eagle-Con, in the comic noir art style."
  },
  {
    "name": "camp-golden-eagle",
    "title": "Camp Golden Eagle",
    "categories": ["print-design"],
    "deliverables": ["poster", "postcard", "tshirt"],
    "shortDesc": "Indoor camping event for the incoming Cal State L.A. freshmen.",
    "description": "Campaign publicity for the Center For Student Involvement’s pseudo-camping event, held within the University-Student Union for incoming freshmen to help assimilate them into the University."
  },
  {
    "name": "usu-desk-calendar",
    "title": "U-SU Desk Calendar",
    "categories": ["print-design"],
    "deliverables": ["desk calendar"],
    "shortDesc": "Folding desktop calendar for the 2013-2014 fiscal year.",
    "description": "A simple calendar made for University-Student Union employees. It uses close-up photos of the University-Student Union building, and muted colors as to remain subtle on top of employee desks."
  },
  {
    "name": "index-la",
    "title": "Index L.A.",
    "categories": ["print-design"],
    "deliverables": ["book"],
    "shortDesc": "An index of student writing about the design scene in L.A.",
    "description": "A collection of design essays exploring L.A.’s design scene written by Cal State L.A.’s design students bound in a book to organize the various design events that comprise the collection of essays."
  },
  {
    "name": "joe-cooper",
    "title": "Joe Cooper",
    "categories": ["web-design"],
    "deliverables": ["web layout", "video prototype"],
    "shortDesc": "A progress reporting/tracking interface for a mountain climber.",
    "description": "Joe Cooper's blog, chronicling a mountain climb live sharing what he's seeing to build a connection with family, friends, and curious onlookers as he makes his journey to the top of Mt. Everest."
  },
  {
    "name": "peter-parker",
    "title": "Peter Parker",
    "categories": ["web-design"],
    "deliverables": ["web layout", "video prototype"],
    "shortDesc": "Web photography portfolio with minimal type usage to maximize photo visibility.",
    "description": "Named after Peter Parker, the fictional photographer from the Marvel universe, this web portfolio was built to feature photography as simply as possible, ridding the page of unnecessary type. Only vital information is left, leaving the photos to speak for themselves."
  }
];

app.controller('projectCtrl',['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.projects = projects;
    $scope.proj = "Project Not Found!";
    $scope.currentProj = $routeParams.name;
    for (var i = 0;i<projects.length;i++) {
      if ($routeParams.name == projects[i].name) {
        $scope.proj = projects[i];
      }
    }
}]);