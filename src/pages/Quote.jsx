import { useState } from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import { supabase } from "../lib/supabaseClient";
import toast from "react-hot-toast";

export default function Quote() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    service_type: "Interior painting",
    message: "",
  });

  function onChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      // If Supabase is not configured, we simulate success.
      if (!supabase) {
        toast.success("Saved (mock mode). Add Supabase keys to enable real submissions.");
        setForm({ name: "", phone: "", email: "", suburb: "", service_type: "Interior painting", message: "" });
        return;
      }

      const { error } = await supabase.from("leads").insert([form]);
      if (error) throw error;

      toast.success("Thanks! We’ll contact you soon.");
      setForm({ name: "", phone: "", email: "", suburb: "", service_type: "Interior painting", message: "" });
    } catch (err) {
      toast.error(err?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white">
      <Container className="py-12">
        <SectionTitle
          eyebrow="Get a Quote"
          title="Tell us what you need"
          subtitle="Share a few details and we’ll get back to you fast."
        />

        <form onSubmit={onSubmit} className="max-w-2xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-zinc-900">Name *</label>
              <input
                name="name"
                required
                value={form.name}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/30"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-zinc-900">Phone *</label>
              <input
                name="phone"
                required
                value={form.phone}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/30"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-zinc-900">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/30"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-zinc-900">Suburb</label>
              <input
                name="suburb"
                value={form.suburb}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/30"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm font-semibold text-zinc-900">Type of service</label>
              <select
                name="service_type"
                value={form.service_type}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/30"
              >
                <option>Interior painting</option>
                <option>Exterior painting</option>
                <option>Doors & frames</option>
                <option>Ceilings</option>
                <option>Commercial</option>
                <option>Repairs & prep</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm font-semibold text-zinc-900">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={5}
                className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/30"
              />
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <p className="text-xs text-zinc-500">
              Tip: you can add photo upload later (Supabase Storage).
            </p>
            <Button type="submit" disabled={loading} className={loading ? "opacity-70" : ""}>
              {loading ? "Sending..." : "Submit"}
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}
