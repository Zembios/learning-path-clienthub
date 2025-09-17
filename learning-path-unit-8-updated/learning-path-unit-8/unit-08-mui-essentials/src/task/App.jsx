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
   * 2) TODO: Provide initialValues shaped exactly like the model:
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

  // Helpers for error display
  const fieldError = (name) =>
    formik.touched?.[name] && formik.errors?.[name] ? formik.errors[name] : undefined;

  // For nested objects (e.g., "profile.firstName") we’ll use dot-notation with getFieldProps/touched/errors
  const nestedError = (path) => {
    const segments = path.split(".");
    let touched = formik.touched;
    let errors = formik.errors;
    for (const s of segments) {
      touched = touched?.[s];
      errors = errors?.[s];
    }
    return touched && errors ? errors : undefined;
  };

  return (
    <Box sx={{ p: 3, maxWidth: 720, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>

      <form onSubmit={formik.handleSubmit} noValidate>
        {/* ========================= Account ========================= */}
        <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
          {/* Section title (account) - <Typography/> */}
          Account
        </Typography>
        <Stack spacing={2}>
          {/* email - <TextField/> */}
          <TextField
            label="Email"
            type="email"
            {...formik.getFieldProps("account.email")}
            error={Boolean(nestedError("account.email"))}
            helperText={nestedError("account.email")}
            fullWidth
          />

          {/* password - <TextField type="password"/> */}
          <TextField
            label="Password"
            type="password"
            {...formik.getFieldProps("account.password")}
            error={Boolean(nestedError("account.password"))}
            helperText={nestedError("account.password")}
            fullWidth
          />
        </Stack>

        <Divider sx={{ my: 3 }} />

        {/* ========================= Profile ========================= */}
        <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
          {/* Section title (profile) - <Typography/> */}
          Profile
        </Typography>
        <Stack spacing={2}>
          {/* firstName - <TextField/> */}
          <TextField
            label="First Name"
            {...formik.getFieldProps("profile.firstName")}
            error={Boolean(nestedError("profile.firstName"))}
            helperText={nestedError("profile.firstName")}
            fullWidth
          />

          {/* lastName - <TextField/> */}
          <TextField
            label="Last Name"
            {...formik.getFieldProps("profile.lastName")}
            error={Boolean(nestedError("profile.lastName"))}
            helperText={nestedError("profile.lastName")}
            fullWidth
          />

          {/* age - <TextField/> */}
          <TextField
            label="Age"
            type="number"
            inputProps={{ min: 0 }}
            {...formik.getFieldProps("profile.age")}
            error={Boolean(nestedError("profile.age"))}
            helperText={nestedError("profile.age")}
            fullWidth
          />

          {/* country - <Select/> (SelectField) */}
          <FormControl fullWidth error={Boolean(nestedError("profile.country"))}>
            <InputLabel id="country-label">Country</InputLabel>
            <Select
              labelId="country-label"
              label="Country"
              name="profile.country"
              value={formik.values.profile?.country ?? ""}
              onChange={(e) => formik.setFieldValue("profile.country", e.target.value)}
              onBlur={() => formik.setFieldTouched("profile.country", true)}
            >
              {COUNTRY_OPTIONS.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Select>
            <Typography variant="caption" color="error">
              {nestedError("profile.country") || " "}
            </Typography>
          </FormControl>
        </Stack>

        <Divider sx={{ my: 3 }} />

        {/* ======================= Preferences ======================= */}
        <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
          {/* Section title (preferences) - <Typography/> */}
          Preferences
        </Typography>
        <Stack spacing={2}>
          {/* lobbyStyle - <Select/> (SelectField) */}
          <FormControl fullWidth error={Boolean(nestedError("preferences.lobbyStyle"))}>
            <InputLabel id="lobby-style-label">Lobby Style</InputLabel>
            <Select
              labelId="lobby-style-label"
              label="Lobby Style"
              name="preferences.lobbyStyle"
              value={formik.values.preferences?.lobbyStyle ?? ""}
              onChange={(e) => formik.setFieldValue("preferences.lobbyStyle", e.target.value)}
              onBlur={() => formik.setFieldTouched("preferences.lobbyStyle", true)}
            >
              {LOBBY_STYLES.map((s) => (
                <MenuItem key={s} value={s}>
                  {s}
                </MenuItem>
              ))}
            </Select>
            <Typography variant="caption" color="error">
              {nestedError("preferences.lobbyStyle") || " "}
            </Typography>
          </FormControl>

          {/* newsletterConsent - <Switch/> */}
          <FormControlLabel
            control={
              <Switch
                name="preferences.newsletterConsent"
                checked={Boolean(formik.values.preferences?.newsletterConsent)}
                onChange={(e) =>
                  formik.setFieldValue("preferences.newsletterConsent", e.target.checked)
                }
                onBlur={() =>
                  formik.setFieldTouched("preferences.newsletterConsent", true)
                }
              />
            }
            label="Subscribe to newsletter"
          />
          <Typography variant="caption" color="error">
            {nestedError("preferences.newsletterConsent") || " "}
          </Typography>

          {/* theme - <ToggleButtonGroup/> */}
          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Theme
            </Typography>
            <ToggleButtonGroup
              exclusive
              value={formik.values.preferences?.theme ?? ""}
              onChange={(_, value) => {
                if (value !== null) formik.setFieldValue("preferences.theme", value);
              }}
              onBlur={() => formik.setFieldTouched("preferences.theme", true)}
              aria-label="Theme"
            >
              {THEMES.map((t) => (
                <ToggleButton key={t} value={t} aria-label={t}>
                  {t}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
            <Typography variant="caption" color="error" display="block">
              {nestedError("preferences.theme") || " "}
            </Typography>
          </Box>
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
