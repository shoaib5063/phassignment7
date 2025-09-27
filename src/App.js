import React, { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketList from "./components/TicketList";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";
import ticketsData from "./data/tickets";
import { ToastContainer, toast } from "react-toastify";

function App() {
  // master tickets (customer tickets)
  const [tickets, setTickets] = useState(ticketsData);

  // currently in-progress: tasks selected from tickets
  const [inProgress, setInProgress] = useState([]);

  // resolved tasks
  const [resolved, setResolved] = useState([]);

  // derived counts for banner
  const inProgressCount = inProgress.length;
  const resolvedCount = resolved.length;

  // click on ticket card to add to Task Status (start work)
  function handleStartTask(ticketId) {
    const ticket = tickets.find((t) => t.id === ticketId);
    if (!ticket) {
      toast.info("Ticket not found or already picked.");
      return;
    }

    setInProgress((prev) => [...prev, ticket]);
    setTickets((prev) => prev.filter((t) => t.id !== ticketId));
    toast.success(`Started: "${ticket.title}"`);
  }

  // complete a task: remove from inProgress, add to resolved
  function handleCompleteTask(taskId) {
    const task = inProgress.find((t) => t.id === taskId);
    if (!task) {
      toast.info("Task not found.");
      return;
    }

    setInProgress((prev) => prev.filter((t) => t.id !== taskId));
    setResolved((prev) => [task, ...prev]);
    toast.success(`Resolved: "${task.title}"`);
  }

  // optional: reopen resolved (not required) - not implemented to match requirements
  // remove from resolved if needed
  function handleRemoveFromResolved(id) {
    setResolved((prev) => prev.filter((t) => t.id !== id));
    toast.info("Removed from resolved.");
  }

  // memoize objects passed down
  const handlers = useMemo(
    () => ({ handleStartTask, handleCompleteTask }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tickets, inProgress, resolved]
  );

  return (
    <div className="app-shell">
      <Navbar />
      <main className="container">
        <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />
        <section className="main-grid">
          <div className="left-col">
            <h2 className="section-title">Customer Tickets</h2>
            <TicketList tickets={tickets} onStartTask={handleStartTask} />
          </div>

          <aside className="right-col">
            <TaskStatus
              inProgress={inProgress}
              resolved={resolved}
              onComplete={handleCompleteTask}
            />
          </aside>
        </section>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={1800} />
    </div>
  );
}

export default App;
