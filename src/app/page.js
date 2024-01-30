import Link from "next/link"

function page() {
  return (
    <div className="">
      <div className="detailed-introduction-container">
        <div className="header">
          <h1>Hello, I'm Mayur D. Bhadane</h1>
          <p>Passionate Web Developer</p>
          <address>
            Mobile No: 8468937368 / 8275925121<br />
            Email: mayurbhadane0806200@gmail.com<br />
            Address: A/p-Wakhari Deola, Tal-Deola, Dist-Nashik-423501
          </address>
        </div>

        <div className="content">
          <section className="career-objective">
            <h2>Career Objective</h2>
            <p>
              Seeking a challenging career opportunity to contribute to the growth and success of an organization,
              while continually enhancing my knowledge and skills. Aspire to take on a leadership role and guide
              the company towards sustained growth and profitability.
            </p>
          </section>

          <section className="scholastics">
            <h2>Scholastics</h2>
            <table>
              <thead>
                <tr>
                  <th>Year of Passing</th>
                  <th>Institute Name / University Name</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2015-16</td>
                  <td>Public School Deola (Maharashtra State Board)</td>
                  <td>79%</td>
                </tr>
                <tr>
                  <td>2017-18</td>
                  <td>KRA Arts Science and Commerce College Deola, Nashik (Maharashtra State Board)</td>
                  <td>65%</td>
                </tr>
                <tr>
                  <td>2020-2021</td>
                  <td>LVH College Nashik (Savitribai Phule Pune University)</td>
                  <td>71%</td>
                </tr>
              </tbody>
            </table>
          </section>
          
        </div>
      </div>
    </div>
  )
}

export default page