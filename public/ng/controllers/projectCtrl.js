var projects = [
  {
    "prefix": "g/",
    "name": "lunar-new-year-2014",
    "title": "Lunar New Year 2014",
    "categories": ["print-design"],
    "deliverables": ["postcard"],
    "shortDesc": "The Cross Cultural Centers Lunar New Year Celebration in Cal State L.A.",
    "description": "Publicity for the Cross Cultural Centers Lunar New Year Celebration, heavily asian themed, from the graphic elements to the color scheme."
  },
  {
    "prefix": "g/",
    "name": "eagle-con",
    "title": "Eagle-Con",
    "categories": ["print-design"],
    "deliverables": ["poster", "postcard", "tshirt", "button"],
    "shortDesc": "Cal State L.A.’s very own sci-fi/comic book convention: Eagle-Con",
    "description": "Printed materials for the publicity and schedule of events for Cal State L.A.’s very own sci-fi/comic book convention: Eagle-Con, in the comic noir art style."
  },
  {
    "prefix": "g/",
    "name": "camp-golden-eagle",
    "title": "Camp Golden Eagle",
    "categories": ["print-design"],
    "deliverables": ["poster", "postcard", "tshirt"],
    "shortDesc": "Indoor camping event for the incoming Cal State L.A. freshmen.",
    "description": "Campaign publicity for the Center For Student Involvement’s pseudo-camping event, held within the University-Student Union for incoming freshmen to help assimilate them into the University."
  },
  {
    "prefix": "g/",
    "name": "usu-desk-calendar",
    "title": "U-SU Desk Calendar",
    "categories": ["print-design"],
    "deliverables": ["desk calendar"],
    "shortDesc": "Folding desktop calendar for the 2013-2014 fiscal year.",
    "description": "A simple calendar made for University-Student Union employees. It uses close-up photos of the University-Student Union building, and muted colors as to remain subtle on top of employee desks."
  },
  {
    "prefix": "g/",
    "name": "index-la",
    "title": "Index L.A.",
    "categories": ["print-design"],
    "deliverables": ["book"],
    "shortDesc": "An index of student writing about the design scene in L.A.",
    "description": "A collection of design essays exploring L.A.’s design scene written by Cal State L.A.’s design students bound in a book to organize the various design events that comprise the collection of essays."
  },
  {
    "prefix": "",
    "name": "irene-and-cris",
    "title": "Irene + Cris",
    "categories": ["wedding-coverage"],
    "deliverables": ["photography", "cinematography"],
    "shortDesc": "An intimate wedding by a cliff filled with the love of family and friends.",
    "description": "Irene and Cris' wedding!"
  },
  {
    "prefix": "g/",
    "name": "joe-cooper",
    "title": "Joe Cooper",
    "categories": ["web-design"],
    "deliverables": ["web layout", "video prototype"],
    "shortDesc": "A progress reporting/tracking interface for a mountain climber.",
    "description": "Joe Cooper's blog, chronicling a mountain climb live sharing what he's seeing to build a connection with family, friends, and curious onlookers as he makes his journey to the top of Mt. Everest."
  },
  {
    "prefix": "g/",
    "name": "peter-parker",
    "title": "Peter Parker",
    "categories": ["web-design"],
    "deliverables": ["web layout", "video prototype"],
    "shortDesc": "Web photography portfolio with minimal type usage to maximize photo visibility.",
    "description": "Named after Peter Parker, the fictional photographer from the Marvel universe, this web portfolio was built to feature photography as simply as possible, ridding the page of unnecessary type. Only vital information is left, leaving the photos to speak for themselves."
  },
  {
    "prefix": "g/",
    "name": "ghost-media",
    "title": "Ghost Media",
    "categories": ["web-design"],
    "deliverables": ["web layout"],
    "shortDesc": "Simple single-page layout for a digital marketing agency.",
    "description": "A simple self-commissioned single-page layout for digital marketing agency with the goal of featuring various services offered to the main targeted markets"
  },
  {
    "prefix": "g/",
    "name": "happy-feet-imaging",
    "title": "Happy Feet Imaging",
    "categories": ["web-design"],
    "deliverables": ["web layout"],
    "shortDesc": "Self-commissioned layout for a high-end sonography company.",
    "description": "Another self-commissioned layout, this time for high-end sonography company featuring 4D imaging. The goal was to build trust with a family friendly and gender neutral design."
  },
  {
    "prefix": "g/",
    "name": "photo-samples",
    "title": "Photography",
    "categories": ["sample-work"],
    "deliverables": ["various styles"],
    "shortDesc": "Sample work from various photography assignments.",
    "description": "I love photography and here are some samples from various shoots both as a freelancer and enthusiast."
  },
  {
    "prefix": "",
    "name": "misc-work",
    "title": "Miscellaneous",
    "categories": ["various"],
    "deliverables": ["cinematography", "motion-graphics",],
    "shortDesc": "Compilation of other fun things I've worked on.",
    "description": "Exploratory experimentation. Thats' what I call it. Really, I just like making things."
  },
];

app.controller('projectCtrl',['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.projects = projects;
    $scope.proj = "Project Not Found!";
    $scope.currentProj = $routeParams.name;
    for (var i = 0;i<projects.length;i++) {
      if ($routeParams.name == projects[i].name) {
        $scope.proj = projects[i];
        $scope.projPrev = projects[i-1];
        $scope.projNext = projects[i+1];
      }
    }
}]);