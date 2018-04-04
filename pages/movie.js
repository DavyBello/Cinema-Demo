import { Component } from 'react'
import Head from 'next/head'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="/static/css/movie.css" />
          <link rel="stylesheet prefetch" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet prefetch" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" />
          <title>Movie Demo</title>
        </Head>
        <div class="container">
          <div class="app">
            <div class="cover">
              <img src="https://s5.postimg.org/9z4aqltuv/cover.jpg" alt="cover" />
              <i class="fa fa-youtube-play"></i>
              <span class="title">
                cloudy with the chance of meatballs(2009)
              <span>
                  1hr 30mins, 7.4 IMDB, Animation Fantasy/Comedy
              </span>
              </span>
            </div>
            <div class="fav">
              <button class="btn">
                <i class="fa fa-plus"></i>
                Add To Favorite
            </button>
              <div class="users">
                <img src="https://s5.postimg.org/xh63ish9j/steve.jpg" alt="" class="user-1" />
                <img src="https://s5.postimg.org/5opmv0orr/bill.jpg" alt="" class="user-2" />
                <img src="https://s5.postimg.org/qcoa9ra07/mark.jpg" alt="" class="user-3" />
                <span class="fav-count">+11</span>
              </div>
            </div>
            <div class="story">
              <span class="title">
                Plot Story
            </span>
              <div class="story-icon">
                <i class="fa fa-play"></i>
              </div><div class="story-text">
                Flint Lockwood is an inventor who develops insignificant things. However, when his local sardine cannery shuts down and ..
            </div>
            </div>
            <div class="schedule">
              <span class="title">
                Coming Schedule
            </span>
              <div class="detail">
                <span class="date">07
                <span>November</span>
                </span>
                <span class="location">
                  Cinemax Pro Cinemas
                <span class="city">
                    Kalyan, Mumbai
                </span>
                </span>
                <button class="btn">
                  <i class="fa fa-check"></i>
                  Booked
              </button>
              </div>
              <div class="map-location">
                <img src="https://s5.postimg.org/jkxv6wl0n/map.jpg" alt="" />
                <span class="distance">1.1 Miles</span>
              </div>
              <div class="schedule-info">
                <div class="rows">
                  <span class="theatre">
                    <span class="title">
                      Theatre
                  </span>
                    <span class="info name">
                      CinePlex
                  </span>
                  </span><span class="show">
                    <span class="title">
                      Show Time
                  </span>
                    <span class="info time">
                      2:15 PM
                  </span>
                  </span>
                </div>
                <div class="rows">
                  <span class="row">
                    <span class="title">
                      Row
                  </span>
                    <span class="info row-line">
                      CF Front
                  </span>
                  </span><span class="seat">
                    <span class="title">
                      Seat
                  </span>
                    <span class="info seat-num">
                      <span class="num">06</span>
                      <span class="num">07</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="yt">
          <a href="https://www.youtube.com/watch?v=--C6sD4LGI0" target="_blank">
            <img width="151" src="https://s5.postimg.org/vzwuxmw87/template.png" alt="" />
          </a>
        </div>
      </div>
    )
  }
}
