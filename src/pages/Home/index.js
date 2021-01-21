import React from "react";
import myface from "../../assets/me.jpg";

class Home extends React.Component {
  render() {
    return (
      <div id="float" class="container" >
        <div class="row d-flex justify-content-center">
          <div class="col-8">
            <div class="card">

              <h1 class="card-header">
                About Me!
          </h1>

              <div class="card-body">

                <img src={myface} class="image-wrapper float-left pr-3"
                  width="200" alt="Mitchell at Wedding" />

                <div class="single-post-content-wrapper">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus non ligula in mollis.
                  Sed et imperdiet odio. Donec eget efficitur nibh. Proin at massa libero.
                  Aenean suscipit varius nulla. Nam egestas egestas arcu, vel efficitur dui feugiat et.
                  Vestibulum ac volutpat nisl, vel sagittis eros. Curabitur sit amet sapien vitae nulla ornare laoreet at
                sed leo.<br />
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eros lacus, iaculis eu neque quis,
                fermentum convallis libero.
                Cras nec mauris sit amet augue ullamcorper dignissim nec eu arcu. Suspendisse condimentum cursus vehicula.
                In a leo quis quam venenatis viverra ac at dui.
                Aliquam mattis, nisi sed condimentum sollicitudin, tellus quam blandit quam, pretium euismod quam est eu
                lorem.
                Vivamus pellentesque sem nec quam pretium porttitor. Sed odio libero, molestie nec risus non, malesuada
                eleifend libero.<br />

                Cras ut hendrerit metus. Nunc nibh odio, tincidunt ut ultrices nec, lacinia sed diam.
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam lobortis felis vel justo tempor,
                volutpat placerat urna auctor.
                Ut fringilla metus ultricies erat rutrum, ac tempus velit finibus. Nulla bibendum ante quis turpis
                imperdiet laoreet. Nulla eu posuere massa.
                Fusce volutpat congue pellentesque. Quisque accumsan nisl sit amet rhoncus viverra. Mauris at urna vel
                turpis finibus commodo vel a massa.
                Donec placerat elit ac nisi maximus rhoncus.<br /><br />

                Checkout my socials: <br />
                  <a href="https://www.linkedin.com/in/mitchell-chee-quee-19b77a1b3/">LinkedIn</a><br />
                  <a href="https://github.com/Mitchellcq">Github</a><br />
                  <a href="../../../public/assets/Mitchell Chee Quee Resume(3).pdf">Resume</a><br />

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Home