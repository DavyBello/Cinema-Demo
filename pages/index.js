import { Component } from 'react'
import Head from 'next/head'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="/static/css/index.css" />
          <link rel="stylesheet prefetch" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet prefetch" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" />
          <title>Cinema Demo</title>
        </Head>
        <div class="container">

          <div class="app">
            <div class="nav">
              <div class="nav-top">
                <i class="fa fa-bars"></i>
                <i class="fa fa-film"></i>
                <i class="fa fa-search"></i>
              </div>
              <ul>
                <li class="active">Today</li>
                <li>Sep 16</li>
                <li>Sep 15</li>
                <li>Sep 14</li>
              </ul>
            </div>

            <div class="list-items">
              <div class="list-item">
                <div class="list-thumb">
                  <img src="https://s5.postimg.org/7ysk9gzz7/annabelle.jpg" alt="" width="110" /></div>
                <span class="movie-time-left">in 2h 15m</span>
                <span class="book-now">
                  <i class="fa fa-ticket"></i>
                </span>
                <div class="movie-detail">
                  <div class="short-detail">
                    <table>
                      <tr>
                        <td class="title">Annabelle</td>
                      </tr>
                      <tr>
                        <td class="author">by David F. Sandberg</td>
                      </tr>
                      <tr>
                        <td class="rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star na"></i>
                          <i class="fa fa-star na"></i>
                        </td>
                      </tr>
                      <tr>
                        <td class="genre">
                          Horror | Mystery | Th...
                        </td>
                      </tr>
                    </table>
                    <span class="more-option"></span>
                  </div>

                  <div class="full-detail">
                    <span class="show-time">
                      Today
                      <span>
                        3:00 PM &nbsp;&nbsp;
                        <i class="fa fa-caret-down"></i>
                      </span>
                    </span>
                    <table>
                      <tr>
                        <td class="title">Annabelle</td>
                      </tr>
                      <tr>
                        <td class="author">by David F. Sandberg</td>
                      </tr>
                      <tr>
                        <td class="duration">
                          1h 49min
                        </td>
                      </tr>
                      <tr>
                        <td class="rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star na"></i>
                          <i class="fa fa-star na"></i>
                          <span>3.1/5</span>
                        </td>
                      </tr>
                    </table>
                    <div class="meta-data">
                      <ul class="nav">
                        <li class="active">Info</li>
                        <li>Cast</li>
                        <li>Reviews</li>
                        <li>Awards(0)</li>
                      </ul>
                      <div class="info">
                        <span class="genre">
                          Horror | Mystery | Thriller
                        </span>
                        <span class="story">
                          12 years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, where they soon become the target of the dollmaker's possessed creation, Annabelle. Annabelle: Creation is a 2017 American supernatural horror film directed by David F. Sandberg and written by Gary Dauberman. It is a prequel to 2014's Annabelle and the fourth installment in The Conjuring series. The film stars Stephanie Sigman, Talitha Bateman, Anthony LaPaglia and Miranda Otto, and depicts the possessed Annabelle doll's origin.
                          <br />
                          Annabelle: Creation premiered at the LA Film Festival on June 19, 2017, and was theatrically released in the United States on August 11, 2017. The film has grossed over $291 million worldwide and received generally positive reviews from critics, who praised the atmosphere and acting, and noted it as an improvement over its predecessor.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="list-item">
                <div class="list-thumb">
                  <img src="https://s5.postimg.org/9du4y78s3/bahubali21.jpg" alt="" width="110" /></div>
                <span class="movie-time-left">5:30 PM</span>
                <span class="book-now">
                  <i class="fa fa-ticket"></i>
                </span>
                <div class="movie-detail">
                  <div class="short-detail">
                    <table>
                      <tr>
                        <td class="title">Bahubali 2</td>
                      </tr>
                      <tr>
                        <td class="author">by S. S. Rajamouli</td>
                      </tr>
                      <tr>
                        <td class="rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star na"></i>
                        </td>
                      </tr>
                      <tr>
                        <td class="genre">
                          Action | Drama | Ad...
                          </td>
                      </tr>
                    </table>
                    <span class="more-option"></span>
                  </div>

                  <div class="full-detail">
                    <span class="show-time">
                      Today
                        <span>
                        5:30 PM &nbsp;&nbsp;
                          <i class="fa fa-caret-down"></i>
                      </span>
                    </span>
                    <table>
                      <tr>
                        <td class="title">Bahubali 2</td>
                      </tr>
                      <tr>
                        <td class="author">by S.S. Rajamouli</td>
                      </tr>
                      <tr>
                        <td class="duration">
                          2h 47min
                          </td>
                      </tr>
                      <tr>
                        <td class="rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star na"></i>
                          <span>3.1/5</span>
                        </td>
                      </tr>
                    </table>
                    <div class="meta-data">
                      <ul class="nav">
                        <li class="active">Info</li>
                        <li>Cast</li>
                        <li>Reviews</li>
                        <li>Awards(0)</li>
                      </ul>
                      <div class="info">
                        <span class="genre">
                          Action | Drama | Adventure
                          </span>
                        <span class="story">
                          When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.<br />
                          Baahubali 2: The Conclusion was premiered at the British Film Institute, and is the inaugural feature film at the 39th Moscow International Film Festival. The Conclusion was theatrically released over 9000 screens worldwide on 28 April 2017. Baahubali 2 was the first Telugu film to be released in 4K High Definition format. It is estimated that close to 200 screens were upgraded to 4K projectors before the release date of the movie.
                            <br />
                          It became the first ever Indian film to gross over ?1,000 crore (US$160 million) in all languages, doing so in just ten days
                          </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="list-item">
                <div class="list-thumb">
                  <img src="https://s5.postimg.org/5u878eds3/inception.jpg" alt="" width="110" /></div>
                <span class="movie-time-left">7:00 PM</span>
                <span class="book-now">
                  <i class="fa fa-ticket"></i>
                </span>
                <div class="movie-detail">
                  <div class="short-detail">
                    <table>
                      <tr>
                        <td class="title">Inception</td>
                      </tr>
                      <tr>
                        <td class="author">by Christopher Nolan</td>
                      </tr>
                      <tr>
                        <td class="rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star na"></i>
                        </td>
                      </tr>
                      <tr>
                        <td class="genre">
                          Action | Sci-Fi | Ad...
                            </td>
                      </tr>
                    </table>
                    <span class="more-option"></span>
                  </div>

                  <div class="full-detail">
                    <span class="show-time">
                      Today
                          <span>
                        7:00 PM &nbsp;&nbsp;
                            <i class="fa fa-caret-down"></i>
                      </span>
                    </span>
                    <table>
                      <tr>
                        <td class="title">Inception</td>
                      </tr>
                      <tr>
                        <td class="author">by Christopher Nolan</td>
                      </tr>
                      <tr>
                        <td class="duration">
                          2h 28min
                            </td>
                      </tr>
                      <tr>
                        <td class="rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star na"></i>
                          <span>4.4/5</span>
                        </td>
                      </tr>
                    </table>
                    <div class="meta-data">
                      <ul class="nav">
                        <li class="active">Info</li>
                        <li>Cast</li>
                        <li>Reviews</li>
                        <li>Awards(0)</li>
                      </ul>
                      <div class="info">
                        <span class="genre">
                          Action | Sci-Fi | Adventure
                            </span>
                        <span class="story">
                          A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.<br />
                          Inception's première was held in London on July 8, 2010; its wide release to both conventional and IMAX theaters began on July 16, 2010. A box office success, Inception grossed over $800 million worldwide. The home video market also had strong results, with $68 million in DVD and Blu-ray sales. Inception opened to acclaim from critics, who praised its story, score, and ensemble cast. It won four Academy Awards for Best Cinematography, Best Sound Editing, Best Sound Mixing, and Best Visual Effects, and was nominated for four more: Best Picture, Best Original Screenplay, Best Art Direction, and Best Original Score.
                            </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="list-item">
                <div class="list-thumb">
                  <img src="https://s5.postimg.org/da7gu6ec3/avatar.jpg" alt="" width="110" /></div>
                <span class="movie-time-left">9:30 PM</span>
                <span class="book-now">
                  <i class="fa fa-ticket"></i>
                </span>
                <div class="movie-detail">
                  <div class="short-detail">
                    <table>
                      <tr>
                        <td class="title">Avatar</td>
                      </tr>
                      <tr>
                        <td class="author">by James Cameron</td>
                      </tr>
                      <tr>
                        <td class="rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star na"></i>
                          <i class="fa fa-star na"></i>
                        </td>
                      </tr>
                      <tr>
                        <td class="genre">
                          Action | Fantasy | Ad...
                              </td>
                      </tr>
                    </table>
                    <span class="more-option"></span>
                  </div>

                  <div class="full-detail">
                    <span class="show-time">
                      Today
                            <span>
                        9:30 PM &nbsp;&nbsp;
                              <i class="fa fa-caret-down"></i>
                      </span>
                    </span>
                    <table>
                      <tr>
                        <td class="title">Avatar</td>
                      </tr>
                      <tr>
                        <td class="author">by James Cameron</td>
                      </tr>
                      <tr>
                        <td class="duration">
                          2h 42min
                              </td>
                      </tr>
                      <tr>
                        <td class="rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star na"></i>
                          <i class="fa fa-star na"></i>
                          <span>3.9/5</span>
                        </td>
                      </tr>
                    </table>
                    <div class="meta-data">
                      <ul class="nav">
                        <li class="active">Info</li>
                        <li>Cast</li>
                        <li>Reviews</li>
                        <li>Awards(0)</li>
                      </ul>
                      <div class="info">
                        <span class="genre">
                          Action | Fantasy | Adventure
                              </span>
                        <span class="story">
                          A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.
                                <br />
                          Avatar premiered in London on December 10, 2009, and was internationally released on December 16 and in the United States and Canada on December 18, to positive critical reviews, with critics highly praising its groundbreaking visual effects. During its theatrical run, the film broke several box office records and became the highest-grossing film of all time, as well as in the United States and Canada, surpassing Cameron's Titanic, which had held those records for twelve years. It also became the first film to gross more than $2 billion and the best-selling film of 2010 in the United States.
                              </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="footer-popup">
              <ul class="action">
                <li>
                  <i class="fa fa-mail-forward"></i>
                </li>
                <li>
                  <i class="fa fa-ticket"></i>
                  <span>Book</span>
                </li>
                <li>
                  <i class="fa fa-film"></i>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div class="yt">
          <a href="https://youtu.be/J94KI4gXK2w" target="_blank">
            <img width="151" src="https://s5.postimg.org/vzwuxmw87/template.png" alt="" />
          </a>
        </div>
      </div>
    )
  }
}
