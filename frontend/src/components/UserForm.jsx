import {
  Box,
  Button,
  Container,
  FormControlLabel,
  IconButton,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createUser, getUserById, updateUser } from "../services/apiServices";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export function UserForm() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
    isAdmin: false,
  });

  useEffect(() => {
    if (id) {
      getUserById(id).then((res) => setForm(res.data));
    }
  }, [id]);

  const handleSubmit = async () => {
    if (id) {
      await updateUser(id, form);
    } else {
      await createUser(form);
    }
    navigate("/users");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          {id ? "Editar Usuário" : "Cadastrar Usuário"}
        </Typography>
        <TextField
          label="Nome"
          fullWidth
          margin="normal"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
        />
        <TextField
          label="Telefone"
          fullWidth
          margin="normal"
          value={form.telefone}
          onChange={(e) => setForm({ ...form, telefone: e.target.value })}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <TextField
          label="Senha"
          fullWidth
          type={show ? "text" : "password"}
          margin="normal"
          value={form.senha}
          onChange={(e) => setForm({ ...form, senha: e.target.value })}
          slotProps={{
            input: {
              endAdornment: (
                <IconButton onClick={() => setShow(!show)}>
                  {show ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            },
          }}
        />
        <FormControlLabel
          label="Admin"
          control={
            <Switch
              checked={form.isAdmin}
              onChange={(e) => setForm({ ...form, isAdmin: e.target.checked })}
            />
          }
        />
        <Box mt={3}>
          <Button variant="contained" onClick={handleSubmit}>
            {id ? "Salvar alterações" : "Salvar"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
