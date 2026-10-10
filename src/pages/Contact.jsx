import { useState } from "react";
import { PageHero } from "../components/ui.jsx";
import { company } from "../data.js";

export default function Contact() {
  const [f, setF] = useState({ name: "", phone: "", email: "", msg: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const body = `Name: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email}\n\n${f.msg}`;
    window.location.href = `mailto:${company.emails[2]}?subject=${encodeURIComponent("Enquiry from website: " + f.name)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <>
      <PageHero
        title="Contact us"
        text="Send your drawing, sample or requirement. We reply with feasibility and a quote."
        crumbs={[{ t: "Contact" }]}
      />
      <section className="section">
        <div className="wrap contact-grid">
          <form className="panel form" onSubmit={submit}>
            <h3>Send an enquiry</h3>
            <label>
              Your name
              <input
                required
                value={f.name}
                onChange={set("name")}
                autoComplete="name"
              />
            </label>
            <div className="row2">
              <label>
                Phone
                <input
                  required
                  type="tel"
                  value={f.phone}
                  onChange={set("phone")}
                  autoComplete="tel"
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={f.email}
                  onChange={set("email")}
                  autoComplete="email"
                />
              </label>
            </div>
            <label>
              What do you need?
              <textarea
                required
                rows="5"
                value={f.msg}
                onChange={set("msg")}
                placeholder="Part or tool type, material, quantity"
              />
            </label>
            <button className="btn" type="submit">
              Send enquiry
            </button>
            {/* <p className="muted small">This opens your email app with the enquiry filled in.</p> */}
          </form>
          <div className="contact-info">
            <div className="panel">
              <h3>Directors</h3>
              {company.phones.map((p) => (
                <p key={p.tel}>
                  <b>{p.name}</b>
                  <br />
                  <a href={`tel:${p.tel}`}>{p.label}</a>
                </p>
              ))}
            </div>
            <div className="panel">
              <h3>Email</h3>
              {company.emails.map((e) => (
                <p key={e}>
                  <a href={`mailto:${e}`}>{e}</a>
                </p>
              ))}
            </div>
            <div className="panel">
              <h3>Work locations</h3>
              {company.units.map((u, i) => (
                <p key={u}>
                  <b>Unit {i + 1}</b>
                  <br />
                  {u}
                </p>
              ))}
              <a
                className="btn btn-ghost btn-sm"
                href={company.map}
                target="_blank"
                rel="noreferrer"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
