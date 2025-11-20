async function deleteMyUser() {
  if (typeof supabaseClient === "undefined") {
    console.error(
      "Supabase client not found. Please ensure the page is fully loaded.",
    );
    return;
  }

  const confirmation = confirm(
    "DANGER: Are you sure you want to permanently delete your user data? This action is irreversible and will remove your progress and settings.",
  );
  if (!confirmation) {
    console.log("User deletion cancelled.");
    return;
  }

  console.log("Attempting to delete your user data from the server...");

  try {
    const {
      data: { user },
    } = await supabaseClient.auth.getUser();
    if (!user) {
      alert("You must be logged in to delete your account.");
      return;
    }

    const { error } = await supabaseClient
      .from("user_settings")
      .delete()
      .eq("user_id", user.id);

    if (error) {
      throw error;
    }

    console.log("User data from 'user_settings' table deleted successfully.");

    await supabaseClient.auth.signOut();
    console.log("You have been signed out.");

    localStorage.clear();
    alert("Your user data has been deleted, and you have been logged out.");
    window.location.reload();
  } catch (err) {
    if (err.code === "42501") {
      console.error(
        "Permission Denied: The security policies on this table do not allow users to delete their own data.",
      );
      alert(
        "Action failed. The application's security rules prevent users from deleting their own data entry. This is a security feature.",
      );
    } else {
      console.error(
        "An error occurred while trying to delete your data:",
        err.message,
      );
      alert("An error occurred. See the console for details.");
    }
  }
}
