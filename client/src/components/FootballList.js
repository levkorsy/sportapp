import React, { Component } from "react";
import axios from "axios";

class FootballList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FootballList: [],
      gameId: ""
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/")
      .then(
        function(response) {
          this.setState({ FootballList: response.data });
        }.bind(this)
      )
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }

  onHandleChange = e => this.setState({ [e.target.name]: e.target.value });
  getIdForComment = e => {
    e.preventDefault();
    console.log(e.target.id);
    this.setState({ gameId: e.target.id });
  };
  handleSubmit = e => {
    e.preventDefault();

    console.log("Add comment football");
    let newComment = {
      userName: this.state.userName,
      comment: this.state.comment,
      gameId: this.state.gameId
    };

    axios({
      method: "post",
      url: "http://localhost:3000/",
      params: newComment,
      headers: {
        "Access-Control-Allow-Origin": true,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      json: true
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    document.getElementById("");
    document.getElementsByTagName("input").value = "";
    document.getElementsByTagName("textarea").value = "";

    this.setState({
      userName: "",
      comment: "",
      gameId: ""
    });
  };

  render() {
    let allFootballList = this.state.FootballList.map(game => (
      <React.Fragment>
        <div className="card mt-2" key={game.id}>
          <div className="card-body">
            <h3 className="text-center">Game # {game.id}</h3>
            <div className="row">
              <div className="col-3">
                <p className="card-text">{game.teamA}</p>
              </div>
              <div className="col-3">
                <p className="card-text">{game.teamB}</p>
              </div>
              <div className="col-3">
                <p className="card-text">{game.Time}</p>
              </div>
              <div className="col-3">
                <p className="card-text">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    id={game.id}
                    onClick={this.getIdForComment}
                  >
                    +
                  </button>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <p className="card-text">{game.ScoreA}</p>
              </div>
              <div className="col-3">
                <p className="card-text">{game.ScoreB}</p>
              </div>
            </div>
          </div>
          <div className="card-footer">Comments:</div>
        </div>
      </React.Fragment>
    ));

    return (
      <div>
        <div> {allFootballList}</div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">Add comment</div>
              <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="userName">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="userName"
                      onChange={this.onHandleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                      name="comment"
                      className="form-control"
                      onChange={this.onHandleChange}
                      required
                    />{" "}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Add comment{" "}
                    </button>
                  </div>
                </form>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FootballList;
