import githubLogo from "../assets/github-mark.svg";

export default function Github() {
  return (
    <div className="github-card">
      <a href="https://github.com/JavedanCode">
        <img className="github-logo" src={githubLogo} alt="github" />
      </a>
      <h2>JavedanCode</h2>
      <p>Check out my GitHub</p>
    </div>
  );
}
