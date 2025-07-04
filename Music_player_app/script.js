songsjson=[
    {id:1, name:"Counting Stars",artist:"OneRepublic",imgloc:"imges/countingstars.jpg",genre:"pop",audioloc:"audio_files/Counting stars.mp3"},
    {id:2, name:"Photograph",artist:"Ed Sheeran",imgloc:"imges/photograph.jpg",genre:"pop",audioloc:"audio_files/photograph.mp3"},
    {id:3, name:"Smells Like Teen Spirit",artist:"Nirvana",imgloc:"imges/Smells_Like_Teen_Spirit.jpg",genre:"rock",audioloc:"audio_files/Nirvana - Smells Like Teen Spirit.mp3"},
    {id:4, name:"Starlight",artist:"DaftPunk",imgloc:"imges/starlight.jpg",genre:"edm",audioloc:"audio_files/Starlight - Discovery.mp3"},
    {id:5, name:"Sultans of Swing",artist:"Dire Straits",imgloc:"imges/sultansofswing.jpg",genre:"rock",audioloc:"audio_files/Dire Straits - Sultans of Swing.mp3"},
];

const genre=["pop","edm","rock"];
let playlists=[];
let activeplaylistid=3;
var id=1;
var CurrentSongId=0;

const themeToggle = document.getElementById("theme-toggle");
const selectgenre=document.querySelector(".select-genre");
const showsongELe=document.querySelector(".songs-available");
const songimg = document.querySelector(".song-image");
const songname =document.querySelector(".Song-name");
const songauthor = document.querySelector(".Author-name");
const audio = document.querySelector("audio");
const allplay = document.querySelector(".all-playlists");
const playele = document.querySelector(".Current-playlist");
const playlistbutton = document.querySelector(".playListCreateButton");
const playlistInput = document.querySelector(".playname");
const prevbutton = document.querySelector(".prevbutton");
const nextButton = document.querySelector(".nextbutton");
const addtoplaylistbutton = document.querySelector(".add-to-playlist");

themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});


for(let gen of genre){
    const opt=document.createElement("option");
    opt.setAttribute("value",gen);
    opt.textContent=gen;
    selectgenre.append(opt);
}


selectgenre.addEventListener("change",()=>{
    showsongELe.textContent="";
    if(selectgenre.value=="all"){
        for(let i of genre){
            showSongs(i);
        }
    }else{
        showSongs(selectgenre.value);
    }
    
});


for(let i of genre){
    showSongs(i);
}       


function showSongs(genre){
    for(let i of songsjson){
        if(i.genre==genre){
            const songele=document.createElement("div");
            songele.classList.add("song");
            songele.textContent=i.name;
            songele.addEventListener("click",()=>renderCurrentSong(i.id));
            showsongELe.appendChild(songele);
        }
    }
}

function renderCurrentSong(songid){
    const makeimg=document.createElement("img");
    for(let i of songsjson){
        if(i.id==songid){
            const imgElement = songimg.querySelector("img");
            imgElement.setAttribute("src", i.imgloc);
            imgElement.setAttribute("alt", `album art of song ${i.name}`);
            songname.textContent = i.name;
            songauthor.textContent = i.artist;
            audio.src=i.audioloc;
            audio.play();
            CurrentSongId=songid;
        }
    }
    
}


function renderplaylists(id,playlistnam,playidarray){
    const playlistname = document.createElement("div");
    playlistname.textContent=playlistnam;
    playlistname.addEventListener("click",()=>{
        activeplaylistid=id;
        console.log(id);
        playele.textContent="";
        for(let id of playidarray){
            const songele=document.createElement("div");
            songele.classList.add("song");
            for(let i of songsjson){if(i.id==id){songele.textContent=i.name;}};
            songele.addEventListener("click",()=>renderCurrentSong(id));
            const removesong = document.createElement("div");
            removesong.textContent="-";
            removesong.classList.add("remove");
            removesong.addEventListener("click", (e) => {
                e.stopPropagation(); 
                const playlist = playlists.find(p => p.id === activeplaylistid);
                if (playlist) {
                    playlist.songids = playlist.songids.filter(x => x !== song.id);
                    renderplaylistsloop();
                }
            });
            songele.append(removesong);
            playele.appendChild(songele);
        }
    });
    allplay.append(playlistname);
}


function renderplaylistsloop(){
    allplay.textContent = "";
    for (let j of playlists) {
        renderplaylists(j.id, j.playlistname, j.songids);
    }
    const active = playlists.find(p => p.id === activeplaylistid);
    if (active) {
        playele.textContent = "";
        for (let songId of active.songids) {
            const song = songsjson.find(s => s.id === songId);
            if (song) {
                const songele = document.createElement("div");
                songele.classList.add("song");
                songele.textContent = song.name;
                songele.addEventListener("click", () => renderCurrentSong(song.id));
                const removesong = document.createElement("div");
                removesong.textContent="-";
                removesong.classList.add("remove");
                removesong.addEventListener("click", (e) => {
                    e.stopPropagation(); 
                    const playlist = playlists.find(p => p.id === activeplaylistid);
                    if (playlist) {
                        playlist.songids = playlist.songids.filter(x => x !== song.id);
                        renderplaylistsloop();
                    }
                });
                songele.append(removesong);
                playele.appendChild(songele);
            }
        }
    }
}


renderplaylistsloop();

playlistbutton.addEventListener("click",()=>{
    const play=playlistInput.value;
    playlistInput.value="";
    newid=id++;
    playlists.push({id:newid,playlistname:play,songids:[]});
    activeplaylistid=newid;
    renderplaylistsloop();
});


addtoplaylistbutton.addEventListener("click", () => {
    if (CurrentSongId == 0) return;

    for (let j of playlists) {
        if (j.id == activeplaylistid) {
            if (!j.songids.includes(CurrentSongId)) {
                j.songids.push(CurrentSongId);
            }
        }
    }
    renderplaylistsloop();
});