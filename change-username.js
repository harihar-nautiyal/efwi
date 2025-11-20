async function changeUsername(newName) {
  if (typeof supabaseClient === "undefined") {
    console.error(
      "Supabase client not found. Please ensure the page is fully loaded.",
    );
    return;
  }

  if (typeof newName !== "string" || newName.trim() === "") {
    console.warn(
      "Please provide a valid, non-empty name. Example: changeUsername('New Name');",
    );
    return;
  }

  console.log(`Attempting to change username to "${newName}" on the server...`);

  try {
    const {
      data: { user },
    } = await supabaseClient.auth.getUser();
    if (!user) {
      console.error("You must be logged in to change your username.");
      alert("You must be logged in to use this function.");
      return;
    }

    const { error } = await supabaseClient.auth.updateUser({
      data: { full_name: newName },
    });

    if (error) {
      throw error;
    }

    localStorage.setItem("userName", newName);

    if (typeof updateGreeting === "function") {
      updateGreeting(newName);
    } else {
      document.getElementById("greetings").textContent =
        `Hey there, ${newName}!`;
    }

    console.log(
      `Successfully changed username to "${newName}". This change will persist after reloading.`,
    );
    alert(`Username successfully changed to "${newName}"!`);
  } catch (err) {
    console.error("Failed to change username on the server:", err.message);
    alert(
      "An error occurred while trying to change your username. See the console for details.",
    );
  }
}
