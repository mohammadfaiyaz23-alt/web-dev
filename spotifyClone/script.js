console.log("here we go with js")
async function getsongs() {

    let a = await fetch("http://127.0.0.1:3000/web%20devlopment/spotifyClone/songs/")
    let response = await a.text();
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) [
            songs.push(element.href.split("/songs/")[1])
        ]

    }
    return songs
}
const playMusic=(track)=>{
    // let audio = new Audio("/songs/" + track)
    currentSong.Src="/songs/" + track
    currentSong.play() 
}
async function main() {
    let currentSong=new Audio();

    let songs = await getsongs()
    console.log(songs)
    let songUL = document.querySelector(".songList").getElementsByTagName("ol")[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li><img class="invert mus" src="music.svg " alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20", " ")}</div>
                                <div>faiyaz</div>
                            </div>
                            <div class="p">play music</div>
                            <img class="mus invert" src="play.svg" alt=""></li>`

    }
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e=>{
        e.addEventListener("click", element=>{

            console.log(e.querySelector(".info ").firstElementChild.innerHTML)
            playMusic(e.querySelector(".info ").firstElementChild.innerHTML.trim())
        })
    })
    
}
main()