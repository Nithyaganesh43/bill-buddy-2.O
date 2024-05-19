// Function to start the countdown and redirect after completion
function startCountdown(studentName) {
    // Set the countdown duration in seconds
    var countdownDuration = 3;

    // Select the element to display the countdown
    var countdownElement = document.getElementById('countdown');

    // Display initial countdown value
    countdownElement.innerText = countdownDuration;

    // Start the countdown
    var countdownInterval = setInterval(function() {
        countdownDuration--; // Decrement countdown value
        countdownElement.innerText = countdownDuration; // Update countdown display

        // Check if countdown has finished
        if (countdownDuration <= 0) {
            clearInterval(countdownInterval); // Stop the countdown
            // Redirect to home.html with studentName as a URL parameter
            window.location.href = `home.html?studentName=${encodeURIComponent(studentName)}`;
        }
    }, 1000); // Update countdown every second (1000 milliseconds)
}

// Function to handle saving the username to a file and triggering download
function saveUsernameToFile(username) {
    const fileName = 'user.txt';
    const blob = new Blob([username], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(link.href);
}

// Function to display welcome message based on the user ID
function displayWelcomeMessage() {
    const urlParams = new URLSearchParams(window.location.search);
    const idNumber = urlParams.get('idNumber');
    if (idNumber) {
        const studentData = {
            "23cs065": "KARPAGAMAHESWARI V",
            "23cs066": "KARTHICK G R",
            "23cs067": "KARTHIK RAJA G",
            "23cs068": "KARTHIKESH N",
            "23cs069": "KAVI SHANTHINI G",
            "23cs070": "KAVIPRABHA S T",
            "23cs071": "KAVYASHREE G",
            "23cs072": "KIRTICK M M",
            "23cs073": "KIRUBHA SAGAR T",
            "23cs074": "KISHOR RAGURAM G",
            "23cs075": "KRITIKA SAPKOTA",
            "23cs076": "LAKSHETAA R",
            "23cs077": "MADHAVA KRISHNAN T",
            "23cs078": "MADHUMATHI V E",
            "23cs079": "MAHESH KUMAR S",
            "23cs080": "MALARVIZHI S",
            "23cs081": "MAMTHA @ AKSHAYA R",
            "23cs082": "MANIMEGALAI E S",
            "23cs083": "MANISH RAGHUL S J",
            "23cs084": "MANOBALAN M",
            "23cs085": "MANOBHARATHI K",
            "23cs086": "MHITHUN T R",
            "23cs087": "MIDHUNA A",
            "23cs088": "MIRUNA C",
            "23cs089": "MOGAN PRASADH K",
            "23cs090": "MOHAMED ANAS A",
            "23cs091": "MOHAMED FAZIL M",
            "23cs092": "MOHAMMED SAFIL S",
            "23cs093": "MOHANA PRIYA M",
            "23cs094": "MOHITH B",
            "23cs095": "MONISHA U",
            "23cs096": "MUGILAN R",
            "23cs097": "MUKISH KUMAR T",
            "23cs098": "MYTHILI P",
            "23cs099": "MYTHREYINI K J",
            "23cs100": "NAGALAKSHMI S",
            "23cs101": "NARESH S",
            "23cs102": "NARTHIKA M",
            "23cs103": "NAVEEN PRASANTH P",
            "23cs104": "NIGUN KARTHI R",
            "23cs105": "NIKHILPRANESH K S",
            "23cs106": "NISA SOWBIKA K S",
            "23cs107": "NISHANTH RAM K",
            "23cs108": "NITHIEN S A",
            "23cs109": "NITHYA GANESH K",
            "23cs110": "NITHYASARATHI M",
            "23cs111": "NIVETHA G",
            "23cs112": "OSHIYANI E",
            "23cs113": "POOJANA S",
            "23cs114": "POONGUZHALI C",
            "23cs115": "PRANAOV S",
            "23cs116": "PRANATI R",
            "23cs117": "PRASANNA KUMAR H",
            "23cs118": "PRASANNA R",
            "23cs119": "PRAVEEN MUTHU KUMAR R",
            "23cs120": "RAGUL RAJ N",
            "23cs121": "RAMYA S",
            "23cs122": "RAVENA S",
            "23cs123": "RAVI AGRAHARI",
            "23cs124": "RHYTHAN VARSHA J",
            "23cs125": "RIKESH YADAV",
            "23cs126": "RITHANYA B R",
            "23cs127": "RITHIGA S",
            "23cs128": "RITHIKA R",
            "23cs129": "ROHINI J K",
            "23cs130": "ROHITH N"
            // Add more student data here...
        };

        const studentName = studentData[idNumber.toLowerCase()];
        if (studentName) {
            const welcomeMessage = `Welcome ${studentName}`;
            document.getElementById('welcomeMessage').innerText = welcomeMessage;
            startCountdown(studentName); // Pass studentName to the countdown function
        } else {
            document.getElementById('welcomeMessage').innerText = 'Invalid ID';
        }
    }
}

// Call the functions when the window loads
window.onload = function() {
    displayWelcomeMessage(); // Display the welcome message and save the username to file
};
