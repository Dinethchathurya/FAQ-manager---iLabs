import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async Thunks for API calls
export const fetchFaqs = createAsyncThunk("faq/fetchFaqs", async () => {
  const response = await fetch("http://localhost:8080/api/faqmanager/questions");
  return response.json();
});

export const addQuestion = createAsyncThunk("faq/addQuestion", async (newQuestion) => {
  const response = await fetch("http://localhost:8080/api/faqmanager/questions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newQuestion),
  });
  return response.json();
});

export const updateQuestion = createAsyncThunk("faq/updateQuestion", async ({ id, updatedData }) => {
  const response = await fetch(`http://localhost:8080/api/faqmanager/questions/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
  return response.json();
});

export const deleteQuestion = createAsyncThunk("faq/deleteQuestion", async (id) => {
  await fetch(`http://localhost:8080/api/faqmanager/questions/${id}`, {
    method: "DELETE",
  });
  return id; // Returning the deleted question ID to remove from state
});

// Create Redux Slice
const faqSlice = createSlice({
  name: "faq",
  initialState: {
    data: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {}, // No need for reducers since we use async actions
  extraReducers: (builder) => {
    builder
      // Fetch FAQs
      .addCase(fetchFaqs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFaqs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchFaqs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      
      // Add Question
      .addCase(addQuestion.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })

      // Update Question
      .addCase(updateQuestion.fulfilled, (state, action) => {
        const index = state.data.findIndex((q) => q.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })

      // Delete Question
      .addCase(deleteQuestion.fulfilled, (state, action) => {
        state.data = state.data.filter((q) => q.id !== action.payload);
      });
  },
});

export default faqSlice.reducer;