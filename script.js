
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                primary: '#4285F4',
                secondary: '#34A853'
              },
              borderRadius: {
                button: '8px'
              }
            }
          }
        }
      


    document.getElementById('loginForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      if (!email || !password) {
        alert('Veuillez remplir tous les champs.');
        return;
      }

      // Ici on pourrait vérifier avec un backend ou localStorage
      alert('Connexion réussie !');
      window.location.href = 'index.html'; // Redirection après succès
    });
  

tailwind.config={theme:{extend:{colors:{primary:'#4285F4',secondary:'#34A853'},borderRadius:{'none':'0px','sm':'4px',DEFAULT:'8px','md':'12px','lg':'16px','xl':'20px','2xl':'24px','3xl':'32px','full':'9999px','button':'8px'}}}}


document.addEventListener('DOMContentLoaded', function() {
  // Skills dropdown toggle
  const skillsFilterBtn = document.getElementById('skillsFilterBtn');
  const skillsDropdown = document.getElementById('skillsDropdown');
  
  skillsFilterBtn.addEventListener('click', function() {
    skillsDropdown.classList.toggle('hidden');
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(event) {
    if (!skillsFilterBtn.contains(event.target) && !skillsDropdown.contains(event.target)) {
      skillsDropdown.classList.add('hidden');
    }
  });
  
  // Rate range slider
  const rateRange = document.getElementById('rateRange');
  const rateValue = document.getElementById('rateValue');
  
  rateRange.addEventListener('input', function() {
    rateValue.textContent = this.value + ' MAD/h';
  });
  
  // Skills checkboxes
  const skillCheckboxes = document.querySelectorAll('#skillsDropdown input[type="checkbox"]');
  
  skillCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      updateSkillsFilterLabel();
    });
  });
  
  function updateSkillsFilterLabel() {
    const selectedSkills = Array.from(skillCheckboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);
    
    if (selectedSkills.length === 0) {
      skillsFilterBtn.querySelector('span').textContent = 'Sélectionner';
    } else if (selectedSkills.length === 1) {
      skillsFilterBtn.querySelector('span').textContent = selectedSkills[0];
    } else {
      skillsFilterBtn.querySelector('span').textContent = `${selectedSkills.length} sélectionnés`;
    }
  }
  
  // Search functionality
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');
  
  searchBtn.addEventListener('click', function() {
    const searchQuery = searchInput.value.toLowerCase();
    // Implement search logic here
  });
  
  // Availability toggle
  const availabilitySwitch = document.getElementById('availabilitySwitch');
  
  availabilitySwitch.addEventListener('change', function() {
    // Filter by availability logic here
  });
});



        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#4285F4',
                        secondary: '#34A853'
                    },
                    borderRadius: {
                        'none': '0px',
                        'sm': '4px',
                        DEFAULT: '8px',
                        'md': '12px',
                        'lg': '16px',
                        'xl': '20px',
                        '2xl': '24px',
                        '3xl': '32px',
                        'full': '9999px',
                        'button': '8px'
                    }
                }
            }
        }
    

tailwind.config={theme:{extend:{colors:{primary:'#4285F4',
    secondary:'#34A853'},borderRadius:{'none':'0px','sm':'4px',DEFAULT:'8px','md':'12px','lg':'16px','xl':'20px','2xl':'24px','3xl':'32px','full':'9999px','button':'8px'}}}}


      document.addEventListener('DOMContentLoaded', () => {
        const toggleBtn = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        toggleBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    });



        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#4285F4',
                        secondary: '#34A853'
                    },
                    borderRadius: {
                        'button': '8px'
                    }
                }
            }
        }
    


        document.addEventListener('DOMContentLoaded', function () {
            const passwordField = document.getElementById('password');
            const confirmPasswordField = document.getElementById('confirmPassword');
            const confirmPasswordError = document.getElementById('confirmPasswordError');

            confirmPasswordField.addEventListener('input', function () {
                if (confirmPasswordField.value !== passwordField.value) {
                    confirmPasswordError.textContent = 'Les mots de passe ne correspondent pas.';
                } else {
                    confirmPasswordError.textContent = '';
                }
            });

            window.checkPasswordStrength = function () {
                const passwordStrengthDiv = document.getElementById('passwordStrength');
                const password = passwordField.value;

                let strength = 'Faible';
                if (password.length >= 8) {
                    strength = 'Moyenne';
                    if (/[A-Z]/.test(password) && /\d/.test(password)) {
                        strength = 'Forte';
                    }
                }
                passwordStrengthDiv.textContent = 'Force du mot de passe : ' + strength;
            }

            const signupForm = document.getElementById('signupForm');
            signupForm.addEventListener('submit', function (event) {
                event.preventDefault();
                if (confirmPasswordField.value !== passwordField.value) {
                    alert('Veuillez vérifier vos mots de passe.');
                } else if (!document.getElementById('terms').checked) {
                    alert('Vous devez accepter les conditions d\'utilisation.');
                } else {
                    alert('Inscription réussie !');
                    // Traitement backend ici si nécessaire
                }
            });
        });
        // Soumission du formulaire
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (confirmPasswordField.value !== passwordField.value) {
        alert('Veuillez vérifier vos mots de passe.');
    } else if (!document.getElementById('terms').checked) {
        alert('Vous devez accepter les conditions d\'utilisation.');
    } else {
        alert('Inscription réussie !');
        window.location.href = " index.html"; // Redirection vers la page d'accueil
    }
});

    

tailwind.config={theme:{extend:{colors:{primary:'#4285F4',
    secondary:'#34A853'},borderRadius:{'none':'0px','sm':'4px',DEFAULT:'8px','md':'12px','lg':'16px','xl':'20px','2xl':'24px','3xl':'32px','full':'9999px','button':'8px'}}}}

tailwind.config={theme:{extend:{colors:{primary:'#4285F4',secondary:'#34A853'},borderRadius:{'none':'0px','sm':'4px',DEFAULT:'8px','md':'12px','lg':'16px','xl':'20px','2xl':'24px','3xl':'32px','full':'9999px','button':'8px'}}}}


document.addEventListener('DOMContentLoaded', function() {
    // Technology dropdown toggle
    const techFilterBtn = document.getElementById('techFilterBtn');
    const techDropdown = document.getElementById('techDropdown');
    
    techFilterBtn.addEventListener('click', function() {
        techDropdown.classList.toggle('hidden');
    });
    
    // Fermez la liste déroulante 
    document.addEventListener('click', function(event) {
        if (!techFilterBtn.contains(event.target) && !techDropdown.contains(event.target)) {
            techDropdown.classList.add('hidden');
        }
    });
    
    // Price range slider
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    
    priceRange.addEventListener('input', function() {
        // Format price with thousands separator
        const formattedValue = new Intl.NumberFormat('fr-FR').format(this.value);
        priceValue.textContent = formattedValue + ' MAD';
    });
    
    // Technology checkboxes
    const techCheckboxes = document.querySelectorAll('#techDropdown input[type="checkbox"]');
    techCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateTechFilterLabel();
        });
    });
    
    function updateTechFilterLabel() {
        const selectedTechs = Array.from(techCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
            
        if (selectedTechs.length === 0) {
            techFilterBtn.querySelector('span').textContent = 'Sélectionner';
        } else if (selectedTechs.length === 1) {
            techFilterBtn.querySelector('span').textContent = selectedTechs[0];
        } else {
            techFilterBtn.querySelector('span').textContent = `${selectedTechs.length} sélectionnés`;
        }
    }
});

// Données  des projets 1 popup
const projects = [
    {
        title: "E-commerce App",
        author: "Mactar Seck",
        category: "Application E-commerce",
        price: "1.625 MAD",
        image: "img/projetcard1.jpg",
        technologies: ["React", "Node.js"],
        description: `Une application E-commerce complète avec système de paiement intégré, gestion de panier et tableau de bord administrateur. Développée avec React pour le frontend et Node.js pour le backend.`,
        github: "#"
    },
    {
        title: "Outil de Gestion de Projet",
        author: "Amina Diouf",
        category: "Outil de Productivité",
        price: "2.166 MAD",
        image: "img/projetcard2.jpg",
        technologies: ["Vue.js", "Django"],
        description: `Un outil complet de gestion de projet avec tableaux Kanban, gestion des tâches et suivi du temps. Interface moderne développée avec Vue.js et API robuste avec Django.`,
        github: "#"
    },
    {
        title: "Plateforme de Réseau Social",
        author: "Ibrahima LO",
        category: "Réseau Social",
        price: "3.250 MAD",
        image: "img/projetcard3.jpg",
        technologies: ["Angular", "Firebase"],
        description: `Plateforme de réseau social avec fonctionnalités de publication, commentaires, likes et messagerie instantanée. Développée avec Angular et Firebase pour le backend.`,
        github: "#"
    },
    {
        title: "Site Portfolio",
        author: "Khadija Cissé",
        category: "Site Web Personnel",
        price: "541 MAD",
        image: "img/projetcard4.jpg",
        technologies: ["HTML", "CSS", "JavaScript"],
        description: `Site portfolio moderne et responsive avec animations fluides. Parfait pour présenter vos travaux et compétences. Code propre et bien documenté.`,
        github: "#"
    },
    {
        title: "Système de Blog CMS",
        author: "Dame Seck",
        category: "Système de Gestion de Contenu",
        price: "1.300 MAD",
        image: "img/projetcard5.jpg",
        technologies: ["PHP", "MySQL", "jQuery"],
        description: `CMS de blog complet avec éditeur WYSIWYG, gestion des utilisateurs et système de commentaires. Développé avec PHP natif et MySQL.`,
        github: "#"
    },
    {
        title: "Kit UI Mobile",
        author: "Bruno A. Diallo",
        category: "Design UI/UX",
        price: "920 MAD",
        image: "img/projetcard6.jpg",
        technologies: ["Sketch", "Figma", "Adobe XD"],
        description: `Kit d'interface utilisateur moderne pour applications mobiles. Comprend plus de 50 composants personnalisables et un système de design cohérent.`,
        github: "#"
    },
    {
        title: "Tableau de Bord Analytics",
        author: "Ibrahima Diouf",
        category: "Visualisation de Données",
        price: "2.383 MAD",
        image: "img/projetcard7.jpg",
        technologies: ["React", "D3.js", "API REST"],
        description: `Tableau de bord analytique avec visualisations interactives et temps réel. Intègre plusieurs sources de données et offre des options d'export.`,
        github: "#"
    },

       {
        title: "Plateforme d'Apprentissage",
        author: "Aicha Rassoul",
        category: "Plateforme d'Apprentissage",
        price: "2.500 MAD",
        image: "img/projetcard8.jpg",
        description: `Une application E-commerce permet aux utilisateurs d'acheter des produits en ligne...`,
        github: "#"
      },
      // Ajoutez ici les 7 autres projets avec leurs infos
    ];

    function openModal(index) {
      const project = projects[index];
      document.getElementById("modalTitle").innerText = project.title;
      document.getElementById("modalAuthor").innerText = `Développeur: ${project.author}`;
      document.getElementById("modalCategory").innerText = `Catégorie: ${project.category}`;
      document.getElementById("modalPrice").innerText = `Prix: ${project.price}`;
      document.getElementById("modalDescription").innerText = `Description: ${project.description}`;
      document.getElementById("modalImage").src = project.image;
      document.getElementById("modalGithub").href = project.github;
      document.getElementById("modal").classList.remove("hidden");
    }

    function closeModal() {
      document.getElementById("modal").classList.add("hidden");
    }


tailwind.config={theme:{extend:{colors:{primary:'#4285F4',secondary:'#34A853'},borderRadius:{'none':'0px','sm':'4px',DEFAULT:'8px','md':'12px','lg':'16px','xl':'20px','2xl':'24px','3xl':'32px','full':'9999px','button':'8px'}}}}


document.addEventListener('DOMContentLoaded', function() {
    // Technology dropdown toggle
    const techFilterBtn = document.getElementById('techFilterBtn');
    const techDropdown = document.getElementById('techDropdown');
    
    techFilterBtn.addEventListener('click', function() {
        techDropdown.classList.toggle('hidden');
    });
    
    // Fermez la liste déroulante 
    document.addEventListener('click', function(event) {
        if (!techFilterBtn.contains(event.target) && !techDropdown.contains(event.target)) {
            techDropdown.classList.add('hidden');
        }
    });
    
    // Price range slider
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    
    priceRange.addEventListener('input', function() {
        // Format price with thousands separator
        const formattedValue = new Intl.NumberFormat('fr-FR').format(this.value);
        priceValue.textContent = formattedValue + ' MAD';
    });
    
    // Technology checkboxes
    const techCheckboxes = document.querySelectorAll('#techDropdown input[type="checkbox"]');
    techCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateTechFilterLabel();
        });
    });
    
    function updateTechFilterLabel() {
        const selectedTechs = Array.from(techCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
            
        if (selectedTechs.length === 0) {
            techFilterBtn.querySelector('span').textContent = 'Sélectionner';
        } else if (selectedTechs.length === 1) {
            techFilterBtn.querySelector('span').textContent = selectedTechs[0];
        } else {
            techFilterBtn.querySelector('span').textContent = `${selectedTechs.length} sélectionnés`;
        }
    }
});

// Données  des projets popup projets 2
const projects2 = [
    {
        title: "AgriLink",
        author: "Mor Sene",
        category: "Plateforme Agricole",
        price: "1.750 MAD",
        image: "img/agrilinkimg.png",
        technologies: ["HTML", "CSS", "JS"],
        description: `Une application E-commerce complète avec système de paiement intégré, gestion de panier et tableau de bord administrateur. Développée avec React pour le frontend et Node.js pour le backend.`,
        github: "#"
    },
    {
        title: "BeugFallouCar",
        author: "Moustapha Diallo",
        category: "Site loca&Vente voiture",
        price: "3.325 MAD",
        image: "img/BeugFallouCar - [127.0.0.1].png",
        technologies: ["HTML", "CSS"],
        description: `Un outil complet de gestion de projet avec tableaux Kanban, gestion des tâches et suivi du temps. Interface moderne développée avec Vue.js et API robuste avec Django.`,
        github: "#"
    },
    {
        title: "Yombal Connect",
        author: "Alpha Diop",
        category: "vitrine professionnelle",
        price: "3.250 MAD",
        image: "img/yombal_connect.png",
        technologies: ["React.js", "Django", "MongoDB"],
        description: `Yombal Connect est une plateforme de mise en relation professionnelle et sociale, dédiée aux entrepreneurs et particuliers africains pour faciliter les échanges et collaborations. Le site offre des services variés, allant de la recherche de partenaires commerciaux à la promotion d'événements locaux.`,
        github: "#"
    },
    {
        title: "Chatgpt-CLI",
        author: "Elias Waly Ba",
        category: "morceaux de code",
        price: "541 MAD",
        image: "img/projetcard4.jpg",
        technologies: ["Coquille"],
        description: `Une interface de ligne de commande (CLI) simple pour interagir avec le modèle ChatGPT d’OpenAI.`,
        github: "https://github.com/elias-ba/chatgpt-cli"
    },
    {
        title: "NumMenu-bot",
        author: "Derguene Mbaye",
        category: "Système de Gestion de Contenu",
        price: "1.300 MAD",
        image: "img/NumMenu-bot.jpg",
        technologies: ["Python"],
        description: `Un exemple de chatbot avec un menu basé sur des chiffres qui peut être utilisé comme point de départ pour un projet.`,
        github: "https://github.com/DerXter/NumMenu-Bot"
    },
    {
        title: "Waxtane",
        author: "Médoune Siby G. Baldé",
        category: "Languages",
        price: "920 MAD",
        image: "img/projetcard6.jpg",
        technologies: ["Svelte", "Astro", "CSS", "JS"],
        description: `Waxtane est un receuil de phrases de discussion traduites en cinq langues (pour le moment). Le Wolof, le Francais, l'Anglais, l'Espagnol et le Catalan. Waxtane vise à faciliter la communication entre personnes parlant différentes langues, en se basant sur un modèle sans prise de têtes la discussion.`,
        github: "https://github.com/MedouneSGB/Waxtane"
    },
    {
        title: "Algo-visualiseur",
        author: "Elias Waly Ba",
        category: "Visualisation de Données",
        price: "2.383 MAD",
        image: "img/algovisualiseur.png",
        technologies: ["Elixir", "HTML", "CSS", "JS"],
        description: `Algo-visualiseur est une plate-forme interactive basée sur le Web pour visualiser divers algorithmes, en mettant l’accent sur les algorithmes de recherche de chemin. Construit à l’aide d’Elixir et de Phoenix LiveView, il permet aux utilisateurs d’interagir et d’observer le comportement de différents algorithmes en temps réel.`,
        github: "https://github.com/elias-ba/algo-visualizer"
    },

       {
        title: "SomnolenceDétection",
        author: "Thierno",
        category: "SomnolenceDétection",
        price: "2.500 MAD",
        image: "img/projetcard8.jpg",
        description: `+SomnolenceDétection est un système d’alerte de sécurité pour la somnolence du conducteur.`,
        github: "https://github.com/TiDev00/DrowsinessDetection"
      },
      // Ajoutez ici les 7 autres projets avec leurs infos
    ];

    function openModal(index) {
      const project = projects[index];
      document.getElementById("modalTitle").innerText = project.title;
      document.getElementById("modalAuthor").innerText = `Développeur: ${project.author}`;
      document.getElementById("modalCategory").innerText = `Catégorie: ${project.category}`;
      document.getElementById("modalPrice").innerText = `Prix: ${project.price}`;
      document.getElementById("modalDescription").innerText = `Description: ${project.description}`;
      document.getElementById("modalImage").src = project.image;
      document.getElementById("modalGithub").href = project.github;
      document.getElementById("modal").classList.remove("hidden");
    }

    function closeModal() {
      document.getElementById("modal").classList.add("hidden");
    }


tailwind.config={theme:{extend:{colors:{primary:'#4285F4',secondary:'#34A853'},borderRadius:{'none':'0px','sm':'4px',DEFAULT:'8px','md':'12px','lg':'16px','xl':'20px','2xl':'24px','3xl':'32px','full':'9999px','button':'8px'}}}}


document.addEventListener('DOMContentLoaded', function() {
// Skills dropdown toggle
const skillsFilterBtn = document.getElementById('skillsFilterBtn');
const skillsDropdown = document.getElementById('skillsDropdown');
skillsFilterBtn.addEventListener('click', function() {
skillsDropdown.classList.toggle('hidden');
});
// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
if (!skillsFilterBtn.contains(event.target) && !skillsDropdown.contains(event.target)) {
skillsDropdown.classList.add('hidden');
}
});
// Rate range slider
const rateRange = document.getElementById('rateRange');
const rateValue = document.getElementById('rateValue');
rateRange.addEventListener('input', function() {
rateValue.textContent = this.value + ' €/h';
});
// Skills checkboxes
const skillCheckboxes = document.querySelectorAll('#skillsDropdown input[type="checkbox"]');
skillCheckboxes.forEach(checkbox => {
checkbox.addEventListener('change', function() {
updateSkillsFilterLabel();
});
});
function updateSkillsFilterLabel() {
const selectedSkills = Array.from(skillCheckboxes)
.filter(cb => cb.checked)
.map(cb => cb.value);
if (selectedSkills.length === 0) {
skillsFilterBtn.querySelector('span').textContent = 'Sélectionner';
} else if (selectedSkills.length === 1) {
skillsFilterBtn.querySelector('span').textContent = selectedSkills[0];
} else {
skillsFilterBtn.querySelector('span').textContent = `${selectedSkills.length} sélectionnés`;
}
}
// Search functionality
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const developersGrid = document.getElementById('developersGrid');
searchBtn.addEventListener('click', function() {
    // Save original button content
    const originalContent = searchBtn.innerHTML;
    
    // Show loading state
    searchBtn.innerHTML = `
        <div class="flex items-center">
            <div class="w-4 h-4 flex items-center justify-center animate-spin mr-2">
                <i class="ri-loader-4-line"></i>
            </div>
            <span>Recherche...</span>
        </div>
    `;
    searchBtn.disabled = true;
    
    const searchQuery = searchInput.value.toLowerCase();
    
    // Simulate API delay
    setTimeout(() => {
        const devCards = developersGrid.getElementsByClassName('dev-card');
        
        Array.from(devCards).forEach(card => {
            const name = card.querySelector('h3').textContent.toLowerCase();
            const skills = Array.from(card.querySelectorAll('.flex-wrap span'))
                .map(span => span.textContent.toLowerCase());
            const description = card.querySelector('p.text-sm.text-gray-600').textContent.toLowerCase();
            
            const matchesSearch = name.includes(searchQuery) || 
                skills.some(skill => skill.includes(searchQuery)) ||
                description.includes(searchQuery);
            
            if (matchesSearch) {
                card.style.display = '';
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.transition = 'opacity 0.3s ease-in-out';
                    card.style.opacity = '1';
                }, 50);
            } else {
                card.style.display = 'none';
            }
        });
        
        // Reset button state
        setTimeout(() => {
            searchBtn.innerHTML = originalContent;
            searchBtn.disabled = false;
        }, 500);
        
        // Update results count
        const visibleCards = Array.from(devCards).filter(card => card.style.display !== 'none').length;
        const resultsCount = document.querySelector('.text-gray-600 span.font-medium');
        if (resultsCount) {
            resultsCount.textContent = visibleCards;
        }
    }, 800);
});
// Add search on Enter key
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});
// Availability toggle
const availabilitySwitch = document.getElementById('availabilitySwitch');
availabilitySwitch.addEventListener('change', function() {
// Filter by availability logic here
});
});
// Dans recherche-dev.html, compléter la fonction de filtrage par disponibilité
availabilitySwitch.addEventListener('change', function() {
    const devCards = developersGrid.getElementsByClassName('dev-card');
    Array.from(devCards).forEach(card => {
        const availability = card.querySelector('.flex.mt-2 span');
        if (this.checked && !availability.textContent.includes('Disponible')) {
            card.style.display = 'none';
        } else {
            card.style.display = '';
        }
    });
});

// Ajouter le tri des résultats
document.getElementById('sortSelect').addEventListener('change', function() {
    // Implémenter la logique de tri
});
