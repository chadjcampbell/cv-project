function Experience({
  experience,
  addExperience,
  deleteExperience,
  changeExperience,
}) {
  return (
    <div className="Experience section">
      <h2>Experience</h2>
      <div className="expContainer">
        {experience.map((exp) => (
          <section key={exp.id} className="expSection">
            <button
              onClick={() => deleteExperience(exp.id)}
              className="deleteBtn"
            >
              Delete
            </button>
            <form autoComplete="off">
              <input
                onChange={(event) =>
                  changeExperience(
                    exp.id,
                    event.target.name,
                    event.target.value
                  )
                }
                placeholder="Company Name"
                type="text"
                name="company"
              ></input>
              <div className="dates">
                <label htmlFor="start">Start date:</label>
                <input
                  onChange={(event) =>
                    changeExperience(
                      exp.id,
                      event.target.name,
                      event.target.value
                    )
                  }
                  type="date"
                  id="start"
                  name="start"
                ></input>
              </div>
              <div className="dates">
                <label htmlFor="end">End date:</label>
                <input
                  onChange={(event) =>
                    changeExperience(
                      exp.id,
                      event.target.name,
                      event.target.value
                    )
                  }
                  type="date"
                  id="end"
                  name="end"
                ></input>
              </div>
              <input
                onChange={(event) =>
                  changeExperience(
                    exp.id,
                    event.target.name,
                    event.target.value
                  )
                }
                placeholder="Last Title"
                type="text"
                name="title"
              ></input>
              <textarea
                onChange={(event) =>
                  changeExperience(
                    exp.id,
                    event.target.name,
                    event.target.value
                  )
                }
                placeholder="Job Description"
                name="jobDesc"
              ></textarea>
            </form>
          </section>
        ))}
      </div>
      <button onClick={addExperience} className="addBtn">
        Add Another Company
      </button>
    </div>
  );
}

export default Experience;
