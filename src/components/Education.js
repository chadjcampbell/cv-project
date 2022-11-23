function Education({
  education,
  addEducation,
  deleteEducation,
  changeEducation,
}) {
  return (
    <div className="Education section">
      <h2>Education</h2>
      <div className="expContainer">
        {education.map((edu) => (
          <section key={edu.id} className="eduSection">
            <button
              onClick={() => deleteEducation(edu.id)}
              className="deleteBtn"
            >
              Delete
            </button>
            <form autoComplete="off">
              <input
                onChange={(event) =>
                  changeEducation(edu.id, event.target.name, event.target.value)
                }
                placeholder="School Name"
                type="text"
                name="school"
                value={edu.school}
              ></input>
              <div className="dates">
                <label htmlFor="start">Start date:</label>
                <input
                  onChange={(event) =>
                    changeEducation(
                      edu.id,
                      event.target.name,
                      event.target.value
                    )
                  }
                  type="date"
                  id="start"
                  name="start"
                  value={edu.start}
                ></input>
              </div>
              <div className="dates">
                <label htmlFor="end">End date:</label>
                <input
                  onChange={(event) =>
                    changeEducation(
                      edu.id,
                      event.target.name,
                      event.target.value
                    )
                  }
                  type="date"
                  id="end"
                  name="end"
                  value={edu.end}
                ></input>
              </div>
              <input
                onChange={(event) =>
                  changeEducation(edu.id, event.target.name, event.target.value)
                }
                placeholder="Degree Type"
                type="text"
                name="degree"
                value={edu.degree}
              ></input>
              <textarea
                onChange={(event) =>
                  changeEducation(edu.id, event.target.name, event.target.value)
                }
                name="study"
                value={edu.study}
                placeholder="Areas of Study"
              ></textarea>
            </form>
          </section>
        ))}
      </div>
      <button onClick={addEducation} className="addBtn">
        Add Another School
      </button>
    </div>
  );
}

export default Education;
