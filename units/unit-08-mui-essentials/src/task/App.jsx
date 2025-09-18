import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Stack,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  Divider,
} from "@mui/material";

/**
 * Simple options for selects/toggles
 */
const COUNTRY_OPTIONS = ["Bulgaria", "Greece", "Romania", "Serbia", "Turkey"];
const LOBBY_STYLES = ["classic", "modern", "minimal"];
const THEMES = ["light", "dark", "system"];

export default function App() {
  /**
   * 1) TODO: Define the Yup validation schema.
   *    - account.email: required, valid email
   *    - account.password: required, min 8 chars
   *    - profile.firstName: required
   *    - profile.lastName: required
   *    - profile.age: required, integer, >= 13
   *    - profile.country: required (one of COUNTRY_OPTIONS)
   *    - preferences.lobbyStyle: required (one of LOBBY_STYLES)
   *    - preferences.newsletterConsent: boolean
   *    - preferences.theme: required (one of THEMES)
   */
  const validationSchema = Yup.object({
    // TODO: implement Yup schema for account, profile, preferences as described above
  });

  /**
   * 2) TODO: Provide initialValues shaped like the model:
   * {
   *   account: { email: "", password: "" },
   *   profile: { firstName: "", lastName: "", age: "", country: "" },
   *   preferences: { lobbyStyle: "", newsletterConsent: false, theme: "light" }
   * }
   */
  const formik = useFormik({
    initialValues: {
      // TODO: fill in initial values per the shape above
    },
    validationSchema,
    onSubmit: (values) => {
      // 3) TODO: keep or replace - for now we just log
      console.log("Submitted values:", values);
      alert("Form submitted! Check the console for values.");
    },
  });

  return (
    <Box sx={{ p: 3, maxWidth: 720, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>

      <form onSubmit={formik.handleSubmit} noValidate>
        {/* ========================= Account ========================= */}
        {/* Section title (account) - <Typography/> */}
        <Stack spacing={2}>
          {/* email - <TextField/> */}
          {/* password - <TextField type="password"/> */}
        </Stack>

        <Divider sx={{ my: 3 }} />

        {/* ========================= Profile ========================= */}
        {/* Section title (profile) - <Typography/> */}
        <Stack spacing={2}>
          {/* firstName - <TextField/> */}
          {/* lastName - <TextField/> */}
          {/* age - <TextField/> */}
          {/* country - <Select/> (SelectField) */}
        </Stack>

        <Divider sx={{ my: 3 }} />

        {/* ======================= Preferences ======================= */}
        {/* Section title (preferences) - <Typography/> */}
        <Stack spacing={2}>
          {/* lobbyStyle - <Select/> (SelectField) */}
          {/* newsletterConsent - <Switch/> */}
          {/* theme - <ToggleButtonGroup/> */}
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button variant="outlined" onClick={formik.handleReset}>
            Reset
          </Button>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
