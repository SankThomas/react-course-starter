import { Line } from "react-chartjs-2"

export default function Chart() {
  const state = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Progress Report",
        backgroundColor: "rgb(219, 39, 119)",
        borderColor: "rgb(219, 39, 119)",
        borderWidth: 1,
        data: [0, 30, 45, 65, 80, 100, 150],
      },
      {
        label: "Expected Averages",
        backgroundColor: "rgb(219, 240, 119)",
        borderColor: "rgb(219, 240, 119)",
        borderWidth: 1,
        data: [0, 30, 60, 90, 120, 150, 180],
      },
    ],
  }

  return (
    <>
      <div>
        <h2 className="text-xl mb-3">Progress Report</h2>
        <div className="bg-white p-5 rounded shadow">
          <Line data={state} />
        </div>
      </div>
    </>
  )
}
