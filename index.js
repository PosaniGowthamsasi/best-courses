const courses = [
  // === AI ===
  {
    title: "AI For Everyone - Andrew Ng",
    platform: "Coursera",
    domain: "AI",
    rating: 4.8,
    url: "https://www.coursera.org/learn/ai-for-everyone",
  },
  {
    title: "Artificial Intelligence A-Z",
    platform: "Udemy",
    domain: "AI",
    rating: 4.6,
    url: "https://www.udemy.com/course/artificial-intelligence-az/",
  },
  {
    title: "AI & Machine Learning Bootcamp",
    platform: "Simplilearn",
    domain: "AI",
    rating: 4.7,
    url: "https://www.simplilearn.com/artificial-intelligence-masters-program-training-course",
  },
  {
    title: "AI Tutorial for Beginners",
    platform: "YouTube",
    domain: "AI",
    rating: 4.7,
    url: "https://www.youtube.com/watch?v=JMUxmLyrhSk",
  },

  // === DevOps ===
  {
    title: "DevOps Engineer Certification Training",
    platform: "Simplilearn",
    domain: "DevOps",
    rating: 4.6,
    url: "https://www.simplilearn.com/devops-engineer-masters-program-certification-training",
  },
  {
    title: "Docker & Kubernetes: The Complete Guide",
    platform: "Udemy",
    domain: "DevOps",
    rating: 4.8,
    url: "https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/",
  },
  {
    title: "Introduction to DevOps",
    platform: "Coursera",
    domain: "DevOps",
    rating: 4.7,
    url: "https://www.coursera.org/learn/devops",
  },
  {
    title: "DevOps Tutorial for Beginners",
    platform: "YouTube",
    domain: "DevOps",
    rating: 4.7,
    url: "https://www.youtube.com/watch?v=0yWAtQ6wYNM",
  },

  // === Data Science ===
  {
    title: "IBM Data Science Professional Certificate",
    platform: "Coursera",
    domain: "Data Science",
    rating: 4.8,
    url: "https://www.coursera.org/professional-certificates/ibm-data-science",
  },
  {
    title: "Data Science A-Z",
    platform: "Udemy",
    domain: "Data Science",
    rating: 4.6,
    url: "https://www.udemy.com/course/datascience/",
  },
  {
    title: "Data Science Certification Course",
    platform: "Simplilearn",
    domain: "Data Science",
    rating: 4.7,
    url: "https://www.simplilearn.com/data-scientist-masters-program-training",
  },
  {
    title: "Data Science Tutorial",
    platform: "YouTube",
    domain: "Data Science",
    rating: 4.8,
    url: "https://www.youtube.com/watch?v=ua-CiDNNj30",
  },

  // === Cloud ===
  {
    title: "AWS Certified Solutions Architect",
    platform: "Udemy",
    domain: "Cloud",
    rating: 4.8,
    url: "https://www.udemy.com/course/aws-certified-solutions-architect-associate/",
  },
  {
    title: "Google Cloud Fundamentals",
    platform: "Coursera",
    domain: "Cloud",
    rating: 4.7,
    url: "https://www.coursera.org/learn/gcp-fundamentals",
  },
  {
    title: "Cloud Computing Certification",
    platform: "Simplilearn",
    domain: "Cloud",
    rating: 4.6,
    url: "https://www.simplilearn.com/cloud-computing-certification-training-course",
  },
  {
    title: "Cloud Computing Tutorial",
    platform: "YouTube",
    domain: "Cloud",
    rating: 4.7,
    url: "https://www.youtube.com/watch?v=2LaAJq1lB1Q",
  },

  // === Java ===
  {
    title: "Java Programming Masterclass",
    platform: "Udemy",
    domain: "Java",
    rating: 4.7,
    url: "https://www.udemy.com/course/java-the-complete-java-developer-course/",
  },
  {
    title: "Java Programming and Software Engineering",
    platform: "Coursera",
    domain: "Java",
    rating: 4.7,
    url: "https://www.coursera.org/specializations/java-programming",
  },
  {
    title: "Java Full Stack Developer",
    platform: "Simplilearn",
    domain: "Java",
    rating: 4.6,
    url: "https://www.simplilearn.com/java-full-stack-developer-certification-training-course",
  },
  {
    title: "Java Tutorial",
    platform: "YouTube",
    domain: "Java",
    rating: 4.7,
    url: "https://www.youtube.com/watch?v=grEKMHGYyns",
  },

  // === Python ===
  {
    title: "Complete Python Bootcamp",
    platform: "Udemy",
    domain: "Python",
    rating: 4.7,
    url: "https://www.udemy.com/course/complete-python-bootcamp/",
  },
  {
    title: "Python for Everybody",
    platform: "Coursera",
    domain: "Python",
    rating: 4.8,
    url: "https://www.coursera.org/specializations/python",
  },
  {
    title: "Python Certification Course",
    platform: "Simplilearn",
    domain: "Python",
    rating: 4.6,
    url: "https://www.simplilearn.com/python-certification-training-course",
  },
  {
    title: "Python Tutorial",
    platform: "YouTube",
    domain: "Python",
    rating: 4.8,
    url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
  },

  // === Full Stack ===
  {
    title: "The Complete 2025 Web Development Bootcamp",
    platform: "Udemy",
    domain: "Full Stack",
    rating: 4.7,
    url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
  },
  {
    title: "Meta Full Stack Developer Professional Certificate",
    platform: "Coursera",
    domain: "Full Stack",
    rating: 4.7,
    url: "https://www.coursera.org/professional-certificates/meta-full-stack-developer",
  },
  {
    title: "Post Graduate Program in Full Stack Web Development",
    platform: "Simplilearn",
    domain: "Full Stack",
    rating: 4.6,
    url: "https://www.simplilearn.com/full-stack-web-developer-mean-stack-certification-training",
  },
  {
    title: "Full Stack Web Development Tutorial",
    platform: "YouTube",
    domain: "Full Stack",
    rating: 4.7,
    url: "https://www.youtube.com/watch?v=nu_pCVPKzTk",
  },
];

function displayCourses(list) {
  const container = document.getElementById("courseList");
  container.innerHTML = "";
  list.forEach((course) => {
    const card = document.createElement("div");
    card.className = "course";
    card.innerHTML = `
      <h3>${course.title}</h3>
      <p><strong>Platform:</strong> ${course.platform}</p>
      <p><strong>Domain:</strong> ${course.domain}</p>
      <p><strong>Rating:</strong> ${course.rating}</p>
      <a href="${course.url}" target="_blank">View Course</a>
    `;
    container.appendChild(card);
  });
}

function filterCourses() {
  let filtered = [...courses];
  const searchQuery = document.getElementById("search").value.toLowerCase();
  const platform = document.getElementById("platform").value;
  const domain = document.getElementById("domain").value;
  const sort = document.getElementById("sort").value;

  if (platform !== "All") {
    filtered = filtered.filter((c) => c.platform === platform);
  }
  if (domain !== "All") {
    filtered = filtered.filter((c) => c.domain === domain);
  }
  if (searchQuery) {
    filtered = filtered.filter(
      (c) =>
        c.title.toLowerCase().includes(searchQuery) ||
        c.platform.toLowerCase().includes(searchQuery) ||
        c.domain.toLowerCase().includes(searchQuery)
    );
  }
  if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sort === "title") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }
  displayCourses(filtered);
}

document.getElementById("search").addEventListener("input", filterCourses);
document.getElementById("platform").addEventListener("change", filterCourses);
document.getElementById("domain").addEventListener("change", filterCourses);
document.getElementById("sort").addEventListener("change", filterCourses);

displayCourses(courses);
