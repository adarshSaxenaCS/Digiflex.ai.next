"use server";

import { revalidatePath } from "next/cache";

export async function submitContactForm(formData) {
  // Convert formData (FormData object) into a JavaScript object
  const data = Object.fromEntries(formData);

  formData.append("access_key", "ed7705d4-6806-4de7-b87b-3dabe78f8116");


  try {
    

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();
    
    if (result.success) {
      console.log("Form Submitted Successfully");

    } else {
    console.log("Form Submission Failed:", result);
    }

    // Optional: Revalidate the page after submission
    revalidatePath("/contact");

    return result;
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, error: "An error occurred" };
  }
}
