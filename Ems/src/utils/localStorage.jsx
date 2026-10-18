const employees = [
  {
    "id": 1,
    "name": "John Doe",
    "email": "employee1@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Prepare Report",
        "description": "Create weekly sales report",
        "date": "2025-09-12",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Meeting",
        "description": "Attend Zoom call with client",
        "date": "2025-09-14",
        "category": "Meetings",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Data Cleanup",
        "description": "Remove duplicate entries from database",
        "date": "2025-09-15",
        "category": "Database",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "name": "Alice Smith",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Code Review",
        "description": "Review pull requests of teammates",
        "date": "2025-09-11",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix Bug #234",
        "description": "Resolve login issue on mobile app",
        "date": "2025-09-13",
        "category": "Bug Fix",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Write Unit Tests",
        "description": "Increase test coverage to 80%",
        "date": "2025-09-18",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "API Documentation",
        "description": "Update API docs for new endpoints",
        "date": "2025-09-19",
        "category": "Documentation",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "name": "Michael Johnson",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Design Mockups",
        "description": "Create UI mockups for dashboard",
        "date": "2025-09-12",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team Presentation",
        "description": "Prepare slides for sprint review",
        "date": "2025-09-14",
        "category": "Presentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Logo Update",
        "description": "Redesign company logo concept",
        "date": "2025-09-16",
        "category": "Branding",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "name": "Sophia Williams",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Server Monitoring",
        "description": "Check server logs for downtime",
        "date": "2025-09-10",
        "category": "Operations",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Security Audit",
        "description": "Run vulnerability scan",
        "date": "2025-09-13",
        "category": "Security",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Deploy Update",
        "description": "Push latest build to production",
        "date": "2025-09-15",
        "category": "Deployment",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Backup Database",
        "description": "Perform full database backup",
        "date": "2025-09-17",
        "category": "Database",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "name": "Emma Brown",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Market Research",
        "description": "Analyze competitor strategies",
        "date": "2025-09-12",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Social Media Campaign",
        "description": "Plan campaign for product launch",
        "date": "2025-09-14",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Customer Survey",
        "description": "Collect feedback from 50 customers",
        "date": "2025-09-18",
        "category": "Customer Success",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Newsletter Draft",
        "description": "Write October newsletter draft",
        "date": "2025-09-19",
        "category": "Content",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Event Planning",
        "description": "Organize annual company meetup",
        "date": "2025-09-20",
        "category": "Events",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
];

const admin = [
  {
    "id": "A1",
    "name": "Admin User",
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));

    
  }
 

export const getLocalStorage = () => {
   const employees =JSON.parse( localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))
   
   return {employees,admin};
}