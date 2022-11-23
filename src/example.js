import uuid from "react-uuid";

function example() {
  const date = new Date();
  const stringDate = date.toJSON().slice(0, 10);

  return {
    personal: {
      fname: "Chad",
      lname: "Campbell",
      address: "Cambridge, OH",
      number: "123-456-7890",
      email: "chadjcampbell@gmail.com",
      bio: "Solution-driven web developer adept at finding solutions, and always eager to learn more. Proven experience developing consumer-focused websites using HTML, CSS, JavaScript, and React. Good knowledge of the best practices for web design, user experience, and speed. ",
    },
    experience: [
      {
        id: uuid(),
        company: "JET Auto Group",
        start: "2014-02-01",
        end: stringDate,
        title: "Internet Sales Manager",
        jobDesc:
          "Tasked with getting online customers into the dealership for a test drive. Without the personal connection of a face-to-face interaction, this position can be even more challenging than selling cars in the store. Manage customer leads, responding to all inquiries in a quick and timely manner. Answer customer questions on product inventory, helping people find the best car for their needs, and explaining the benefits of the vehicles.",
      },
      {
        id: uuid(),
        company: "Cash America Financial",
        start: "2009-04-01",
        end: "2013-12-15",
        title: "Store Manager",
        jobDesc:
          "Manage and motivate a team to increase sales and ensure efficiency. Manage stock levels and make key decisions about stock control. Analyse sales figures and forecast future sales. Used information technology to record sales figures, analyse data and forward plan. Dealt with staffing issues such as interviewing potential staff, conducting appraisals and performance reviews. Also provided or organised training and development.",
      },
    ],
    education: [
      {
        id: uuid(),
        school: "West Virginia University",
        start: "2004-08-20",
        end: "2006-12-01",
        degree: "N/A",
        study: "Computer Science/ Computer Engineering",
      },
    ],
  };
}

export default example;
