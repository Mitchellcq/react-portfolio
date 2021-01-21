import React from "react";


class Contact extends React.Component {
    render() {
        return (
            <div id="float" class="container" >
                <div class="row d-flex justify-content-center">
                    <div class="col-8">
                        <div class="card">

                            <h1 class="card-header">
                                Contact me
                        </h1>

                            <div class="card-body">

                                <form action="mailto:mitchellcq@gmail.com"
                                    method="POST"
                                    enctype="multipart/form-data"
                                    name="EmailForm">

                                    <div class="form-group">
                                        <label for="usr">Name:</label>
                                        <input type="text" class="form-control" id="usr" name="username" />
                                    </div>

                                    <div class="form-group">
                                        <label for="pwd">Email:</label>
                                        <input type="email" class="form-control" id="email" name="email" />
                                    </div>

                                    <div class="form-group">
                                        <label for="comment">Comment:</label>
                                        <textarea class="form-control" rows="5" id="comment" name="text" />
                                    </div>

                                    <button type="submit" class="btn btn-primary">Submit</button>

                                </form>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
};

export default Contact