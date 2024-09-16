import { useState } from "react";
import { analyzeImageFromUrl } from '../services/imageAnalysisService.js';

function ImageAnalysis({
  imgList,
  randomImgList,
}) {
  const [imgDescriptions, setImgDescriptions] = useState({});
  const [userInputImgUrl, setUserInputImgUrl] = useState("");
  const userInputImgDescription = imgDescriptions[userInputImgUrl];
  const [randomImgUrl, setRandomImgUrl] = useState("");
  const [randomImgDescription, setRandomImgDescription] = useState("");

  const [loadingStatus, setLoadingStatus] = useState("");

  function analyzeImage(imgUrl) {
    analyzeImageFromUrl(imgUrl)
      .then((response) => {
        console.log(response);
        // Optional chaining to safely access captionResult.text if it exists
        const captionText = response.captionResult?.text;
        if (captionText) {
          setImgDescriptions((prevDescriptions) => ({
            ...prevDescriptions,
            [imgUrl]: captionText,
          }));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function analyzeUserInputImage() {
    analyzeImage(userInputImgUrl);
  }

  function randomImg() {
    const randomImg =
      randomImgList[Math.floor(Math.random() * randomImgList.length)];
    setRandomImgUrl(randomImg);
  }

  function analyzeRandomImg(imgUrl) {
    setLoadingStatus("Loading...");

    analyzeImageFromUrl(imgUrl)
      .then((response) => {
        console.log(response);
        // Use optional chaining to safely access captionResult.text
        const captionText = response.captionResult?.text;
        if (captionText) {
          setRandomImgDescription(captionText);
          setLoadingStatus("Success!");
        } else {
          setLoadingStatus("No caption found.");
        }
      })
      .catch((error) => {
        console.log(error);
        setLoadingStatus("Error occurred!");
      });
  }

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            placeholder="Enter Image URL"
            value={userInputImgUrl}
            onChange={(e) => setUserInputImgUrl(e.target.value)}
          />
        </div>
        <button onClick={analyzeUserInputImage}>Analyze Image</button>
        <p>{userInputImgDescription}</p>
      </div>
      <div
        style={{
          background: "black",
          color: "white",
          border: "solid 1px white",
          height: "800px",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <div style={{ height: "500px", display: "flex", alignItems: "center" }}>
          <img width={"300px"} src={randomImgUrl} alt="Random" />
        </div>
        <div
          style={{
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <button onClick={randomImg}>Random Img</button>
            <button
              onClick={() => {
                analyzeRandomImg(randomImgUrl);
              }}
            >
              Analyze Image
            </button>
          </div>
        </div>
        <div style={{ height: "200px", maxWidth: "300px" }}>
          <p>Status: {loadingStatus}</p>
          <p>Img Description:</p>
          <p style={{ border: "solid 1px white" }}>{randomImgDescription}</p>
        </div>
      </div>

      {imgList.map((imgUrl) => (
        <div key={imgUrl}>
          <img src={imgUrl} width={"300px"} alt="Analyzed Image" />
          <div>
            <button onClick={() => analyzeImage(imgUrl)}>Analyze Image</button>
            <p>{imgDescriptions[imgUrl]}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ImageAnalysis;
