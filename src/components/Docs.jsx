import React from "react";

function Docs() {
  return (
    <div className="doc">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <br />
            <span className="flex">
              <a href="/">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-return-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
                  />
                </svg>{" "}
                Return to Search{" "}
              </a>
            </span>

            <br />

            <h1 className="title doc-title">What is Me♪o?</h1>

            <p>
              {" "}
              Designed to help musicans find the pieces in their mind, Me♪o is a
              search engine allowing one to search a song or music piece by
              notes in the form of letter and numbered musical notation.{" "}
            </p>
            <p>
              {" "}
              Feel free to visit our{" "}
              <a href="https://github.com/ricsign/melo">
                <u>GitHub</u>
              </a>{" "}
              for the source-code.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Docs;
