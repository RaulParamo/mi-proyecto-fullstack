// frontend/src/components/ContactForm.jsx
import { useState } from 'react';
import axios from 'axios';

export default function ContactForm({ onSubmitSuccess }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  // Valida solo letras y espacios
  const validateName = (name) => /^[a-zA-ZÀ-ÿ\s]+$/.test(name.trim());

  // Valida email simple
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación antes de enviar
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    } else if (!validateName(form.name)) {
      newErrors.name = 'El nombre solo puede contener letras y espacios';
    }

    if (!form.email.trim()) {
      newErrors.email = 'El correo es obligatorio';
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'El correo no es válido';
    }

    if (!form.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio';
    }

    setErrors(newErrors);

    // Si no hay errores, enviamos el formulario
    if (Object.keys(newErrors).length === 0) {
      try {
        await axios.post('http://localhost:5000/api/contact', form);
        onSubmitSuccess();
        setForm({ name: '', email: '', message: '' });
      } catch (error) {
        alert('Error al enviar el formulario');
      }
    }
  };

  return (
    <>
     
      <form onSubmit={handleSubmit} noValidate>
        <input
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

        <input
          name="email"
          type="email"
          placeholder="Correo"
          value={form.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

        <textarea
          name="message"
          placeholder="Mensaje"
          value={form.message}
          onChange={handleChange}
          required
        />
        {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
