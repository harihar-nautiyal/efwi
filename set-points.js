async function setPoints(newAmount) {
  if (typeof points === "undefined" || typeof supabaseClient === "undefined") {
    console.error(
      "Required variables (points, supabaseClient) not found. Please ensure the page is fully loaded.",
    );
    return;
  }

  if (typeof newAmount !== "number" || newAmount < 0) {
    console.warn(
      "Please specify a valid, non-negative number of points. Example: setPoints(10000);",
    );
    return;
  }

  console.log(
    `Setting points to ${newAmount.toLocaleString("en-US")} on the server...`,
  );

  try {
    const {
      data: { user },
    } = await supabaseClient.auth.getUser();
    if (!user) {
      console.error("You must be logged in to set points permanently.");
      alert("You must be logged in to use this function.");
      return;
    }

    const { error } = await supabaseClient
      .from("user_settings")
      .update({ points: newAmount })
      .eq("user_id", user.id);

    if (error) {
      throw error;
    }

    points = newAmount;
    document.getElementById("points").textContent =
      points.toLocaleString("en-US");

    saveProgress();

    console.log(
      `Successfully set points to ${points.toLocaleString("en-US")}. This change will now persist after reloading.`,
    );
    alert(`Points successfully set to ${points.toLocaleString("en-US")}!`);
  } catch (err) {
    console.error("Failed to set points on the server:", err.message);
    alert(
      "An error occurred while trying to save your points. See the console for details.",
    );
  }
}
