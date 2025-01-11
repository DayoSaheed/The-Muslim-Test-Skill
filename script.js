// Quiz Data
const quizData = {
    aqeedah: [
        {
            question: "What is Tawheed?",
            answer: "Tawheed is the Islamic concept of the Oneness of God, encompassing the belief in the absolute unity of God, His uniqueness, and that He has no partners, associates, or equals."
        },
        {
            question: "What are the pillars of Iman (faith)?",
            answer: "Belief in Allah (God), His Angels, His Books, His Messengers, the Day of Judgment, and Qadr (Divine Decree)"
        },
        {
            question: "What is Shirk?",
            answer: "Shirk is the grave sin of associating partners with Allah, such as worshiping idols, seeking help from other than Allah, or believing in any concept that diminishes Allah's absolute Oneness."
        },
        {
            question: "What is the meaning of Qadr?",
            answer: "Qadr refers to the Divine Decree of Allah, encompassing all that has happened, is happening, and will happen. It emphasizes that everything occurs with Allah's knowledge and permission."
        },
        {
            question: "What is the significance of the Names and Attributes of Allah?",
            answer: "The Names and Attributes of Allah (al-Asma al-Husna) reflect His perfection and majesty. Reflecting on these names helps deepen our understanding of Allah and strengthens our faith."
        },
        {
            question: "What is the concept of Jannah (Paradise)?",
            answer: "Jannah is the eternal abode of the righteous in the Hereafter, a place of everlasting bliss, joy, and reward for those who fulfill their duties to Allah."
        },
        {
            question: "What is the concept of Jahannam (Hellfire)?",
            answer: "Jahannam is the eternal abode of the disbelievers and sinners in the Hereafter, a place of eternal punishment for those who reject Allah and disobey His commands."
        },
        {
            question: "What is the importance of seeking knowledge in Islam?",
            answer: "Seeking knowledge is a religious obligation for every Muslim. It is a means of drawing closer to Allah, understanding His religion, and fulfilling one's duties in this life and the Hereafter."
        },
        {
            question: "What is the meaning of La ilaha illallah?",
            answer: "La ilaha illallah translates to 'There is no god but Allah.' This is the core of Islamic belief, the Shahada, and the foundation of all other acts of worship."
        },
        {
            question: "What is the importance of remembering Allah (dhikr)?",
            answer: "Remembering Allah through reciting His Names, verses from the Quran, and supplications brings tranquility to the heart, purifies the soul, and strengthens one's connection with Allah."
        }
    ],
    prophet: [
        {
            question: "Who is the final and most beloved Prophet of Allah?",
            answer: "Prophet Muhammad (peace be upon him)"
        },
        {
            question: "What are some of the key characteristics of Prophet Muhammad (peace be upon him)?",
            answer: "Honesty, trustworthiness, compassion, courage, humility, and forgiveness"
        },
        {
            question: "What is the significance of the Prophet's (peace be upon him) life (Seerah)?",
            answer: "The Seerah provides a practical example of how to live a life according to Islamic teachings and serves as a source of guidance and inspiration for Muslims."
        },
        {
            question: "What is the meaning of 'Messenger of Allah'?",
            answer: "A Messenger of Allah is a divinely appointed individual who delivers Allah's message to humanity, including guidance, warnings, and laws."
        },
        {
            question: "What are some of the miracles of Prophet Muhammad (peace be upon him)?",
            answer: "The Quran, the splitting of the moon, the miraculous journey (Isra and Mi'raj), and his ability to heal the sick."
        },
        {
            question: "How did Prophet Muhammad (peace be upon him) spread Islam?",
            answer: "Primarily through peaceful means, including preaching, teaching, and setting a positive example for others."
        },
        {
            question: "What is the importance of following the Sunnah of the Prophet (peace be upon him)?",
            answer: "Following the Sunnah is essential for understanding and practicing Islam correctly. It provides guidance on various aspects of life, from prayer and fasting to social interactions and personal conduct."
        },
        {
            question: "What is the significance of the Prophet's (peace be upon him) family (Ahl al-Bayt)?",
            answer: "They are highly respected in Islam, and their lives and teachings offer valuable insights into Islamic principles."
        },
        {
            question: "What is the importance of showing respect and love for Prophet Muhammad (peace be upon him)?",
            answer: "It is a fundamental aspect of faith and a means of seeking Allah's pleasure."
        },
        {
            question: "How can we learn about the life and teachings of Prophet Muhammad (peace be upon him)?",
            answer: "By studying the Seerah, reading the Quran, and seeking knowledge from reliable sources."
        }
    ],
    solat: [
        {
            question: "What are the five daily prayers?",
            answer: "Fajr (dawn), Dhuhr (noon), Asr (afternoon), Maghrib (sunset), Isha (night)"
        },
        {
            question: "What are the pillars of prayer?",
            answer: "Making the intention (niyyah), Standing for prayer (if physically able), Reciting the Quran, Bowing (ruku'), Prostrating (sujud), Sitting between prostrations"
        },
        {
            question: "What is the importance of performing wudhu' (ablution) before prayer?",
            answer: "Wudhu' is a physical and spiritual purification that prepares the body and mind for prayer."
        },
        {
            question: "What is the significance of facing the Kaaba (Qibla) during prayer?",
            answer: "It symbolizes the unity of Muslims worldwide and their focus on the House of Allah."
        },
        {
            question: "What are some of the etiquettes of prayer?",
            answer: "Finding a clean place to pray, Covering one's 'awrah (private parts), Facing the Qibla with sincerity, Maintaining focus and concentration, Being mindful of one's surroundings"
        },
        {
            question: "What are some of the benefits of performing prayer regularly?",
            answer: "Peace of mind, Protection from evil, Increased awareness of Allah, Strengthening one's faith, Purification of the heart"
        },
        {
            question: "What should one do if they miss a prayer?",
            answer: "Perform the missed prayer as soon as possible, without delay."
        },
        {
            question: "What are some of the common mistakes to avoid during prayer?",
            answer: "Distraction, Hastiness, Improper bowing or prostrating, Talking during prayer"
        },
        {
            question: "How can one improve the quality of their prayers?",
            answer: "By understanding the meaning of the Quranic verses recited, By reflecting on the words of the prayer, By seeking to connect with Allah sincerely"
        },
        {
            question: "What is the importance of praying in congregation (jama'ah)?",
            answer: "It is more rewarding than praying alone, It fosters a sense of community among Muslims, It provides an opportunity for collective worship and supplication"
        }
    ],
    fiqh: [
        {
            question: "What are the five pillars of Islam?",
            answer: "Shahada (testimony of faith), Salat (prayer), Sawm (fasting during Ramadan), Zakat (charity), Hajj (pilgrimage to Mecca)"
        },
        {
            question: "What are the conditions for fasting in Ramadan?",
            answer: "Reaching the age of puberty, Being physically and mentally capable, Having the intention to fast before dawn"
        },
        {
            question: "What are some of the obligations of Zakat?",
            answer: "Paying Zakat on wealth that meets the nisab (minimum threshold), Giving Zakat to eligible recipients"
        },
        {
            question: "What are the major rulings in Islamic law (fiqh)?",
            answer: "Obligatory (wajib), Recommended (sunnah), Permissible (mubah), Disliked (makruh), Forbidden (haram)"
        },
        {
            question: "What are some of the ethical principles in Islam?",
            answer: "Honesty, Trustworthiness, Justice, Compassion, Fairness"
        },
        {
            question: "What are some of the social responsibilities of Muslims?",
            answer: "Upholding justice and equality, Caring for the poor and needy, Protecting the environment, Contributing to the well-being of society"
        },
        {
            question: "What are the rights and responsibilities of parents and children in Islam?",
            answer: "Parents have the right to obedience and respect from their children. Children have the right to be provided for, educated, and treated with kindness and compassion."
        },
        {
            question: "What are some of the rules regarding marriage in Islam?",
            answer: "Marriage is a sacred contract between a man and a woman, It should be based on mutual consent and respect, Polygamy is permitted under certain conditions, Divorce is allowed in Islam but is discouraged"
        },
        {
            question: "What are some of the Islamic guidelines for business and finance?",
            answer: "Honesty and fairness in all transactions, Prohibition of usury (riba), Encouragement of charitable giving, Protection of consumer rights"
        },
        {
            question: "What are some of the Islamic guidelines for social interactions?",
            answer: "Respecting the rights of others, Avoiding backbiting and slander, Upholding good manners and etiquette, Promoting peace and harmony within society"
        }
    ]
};

let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let userName = '';
let userGender = '';

function startQuiz() {
    userName = document.getElementById('user-name').value;
    userGender = document.getElementById('gender').value;
    
    if (!userName || !userGender) {
        alert('Please enter your name and select gender');
        return;
    }
    
    document.getElementById('welcome-section').classList.add('hidden');
    document.getElementById('category-section').classList.remove('hidden');
}

function selectCategory(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    
    document.getElementById('category-section').classList.add('hidden');
    document.getElementById('quiz-section').classList.remove('hidden');
    
    loadQuestion();
}

function loadQuestion() {
    const question = quizData[currentCategory][currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    
    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / quizData[currentCategory].length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
    
    // Generate options
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    const correctAnswer = question.answer;
    const options = generateOptions(correctAnswer);
    
    options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectAnswer(option, correctAnswer);
        optionsContainer.appendChild(optionElement);
    });

    // Disable next button until answer is selected
    document.getElementById('next-btn').disabled = true;
}

function generateOptions(correctAnswer) {
    const options = [correctAnswer];
    
    // Generate plausible wrong answers from other questions in the same category
    const otherAnswers = quizData[currentCategory]
        .filter((q, idx) => idx !== currentQuestionIndex)
        .map(q => q.answer);
    
    // Randomly select 3 wrong answers
    while (options.length < 4 && otherAnswers.length > 0) {
        const randomIndex = Math.floor(Math.random() * otherAnswers.length);
        const wrongAnswer = otherAnswers.splice(randomIndex, 1)[0];
        options.push(wrongAnswer);
    }
    
    return shuffleArray(options);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function selectAnswer(selectedAnswer, correctAnswer) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
        } else if (option.textContent === selectedAnswer) {
            option.classList.add(selectedAnswer === correctAnswer ? 'correct' : 'incorrect');
        }
        option.style.pointerEvents = 'none';
    });
    
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= quizData[currentCategory].length) {
        showResults();
    } else {
        loadQuestion();
    }
}

function showResults() {
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('results-section').classList.remove('hidden');
    
    const percentage = (score / quizData[currentCategory].length) * 100;
    
    document.getElementById('result-name').textContent = userName;
    document.getElementById('result-category').textContent = currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);
    document.getElementById('result-score').textContent = `${score}/${quizData[currentCategory].length} (${percentage.toFixed(1)}%)`;
    
    // Update progress circle
    const progressCircle = document.querySelector('.progress-circle');
    progressCircle.style.background = `conic-gradient(var(--secondary-color) ${percentage}%, #eee ${percentage}%)`;
    document.querySelector('.progress-value').textContent = `${percentage.toFixed(1)}%`;
}

function downloadResults() {
    const element = document.getElementById('results-content');
    const opt = {
        margin: 1,
        filename: `islamic_quiz_results_${userName}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
}

function retakeQuiz() {
    document.getElementById('results-section').classList.add('hidden');
    document.getElementById('category-section').classList.remove('hidden');
}

// Add these functions to your existing script.js file

// Store for participants data
let participants = [];

// Load participants from localStorage on startup
function loadParticipants() {
    const stored = localStorage.getItem('quizParticipants');
    if (stored) {
        participants = JSON.parse(stored);
    }
}

// Save participant data
function saveParticipant(quizData) {
    const participant = {
        name: userName,
        email: document.getElementById('user-email').value,
        gender: userGender,
        category: currentCategory,
        score: score,
        totalQuestions: quizData[currentCategory].length,
        date: new Date().toISOString()
    };
    
    participants.push(participant);
    localStorage.setItem('quizParticipants', JSON.stringify(participants));
}

// Update the showResults function
function showResults() {
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('results-section').classList.remove('hidden');
    
    const percentage = (score / quizData[currentCategory].length) * 100;
    
    document.getElementById('result-name').textContent = userName;
    document.getElementById('result-category').textContent = currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);
    document.getElementById('result-score').textContent = `${score}/${quizData[currentCategory].length} (${percentage.toFixed(1)}%)`;
    
    // Update progress circle
    const progressCircle = document.querySelector('.progress-circle');
    progressCircle.style.background = `conic-gradient(var(--secondary-color) ${percentage}%, #eee ${percentage}%)`;
    document.querySelector('.progress-value').textContent = `${percentage.toFixed(1)}%`;
    
    // Save participant data
    saveParticipant(quizData);
}

// Admin Functions
function showAdmin() {
    loadParticipants();
    document.getElementById('results-section').classList.add('hidden');
    document.getElementById('admin-section').classList.remove('hidden');
    displayParticipants();
}

function displayParticipants(searchTerm = '') {
    const tbody = document.getElementById('participants-list');
    tbody.innerHTML = '';
    
    const filteredParticipants = searchTerm 
        ? participants.filter(p => 
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.email.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : participants;
    
    filteredParticipants.forEach(p => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${p.name}</td>
            <td>${p.email}</td>
            <td>${p.gender}</td>
            <td>${p.category}</td>
            <td>${p.score}/${p.totalQuestions} (${((p.score/p.totalQuestions)*100).toFixed(1)}%)</td>
            <td>${new Date(p.date).toLocaleDateString()}</td>
        `;
        tbody.appendChild(row);
    });
}

// Search functionality
document.getElementById('search-participant')?.addEventListener('input', (e) => {
    displayParticipants(e.target.value);
});

// Export to CSV
function exportToCSV() {
    const headers = ['Name', 'Email', 'Gender', 'Category', 'Score', 'Date'];
    const csvRows = [headers];
    
    participants.forEach(p => {
        csvRows.push([
            p.name,
            p.email,
            p.gender,
            p.category,
            `${p.score}/${p.totalQuestions}`,
            new Date(p.date).toLocaleDateString()
        ]);
    });
    
    const csvContent = csvRows.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', 'quiz_participants.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Add a button to the results section to access admin view
function addAdminButton() {
    const adminButton = document.createElement('button');
    adminButton.innerHTML = '<i class="fas fa-users"></i> View All Participants';
    adminButton.onclick = showAdmin;
    adminButton.classList.add('admin-btn');
    document.querySelector('.action-buttons').appendChild(adminButton);
}

// Call this when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadParticipants();
    addAdminButton();
});