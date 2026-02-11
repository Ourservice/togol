function search(){
    const q = document.getElementById("query").value.trim();

    if(q === ""){
        alert("Please enter something to search");
        return;
    }

    // For now redirect to Google
    window.location.href = 
        "https://www.google.com/search?q=" + encodeURIComponent(q);
}
