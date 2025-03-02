import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addQuestion } from "../redux/faqSlice"; 
import {categories} from "../const";

const AddQuestionModal = () => {

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Handle Form Submission
  const onSubmit = (data) => {
    const formattedData = {
      question: data.question,
      categoryId: { id: Number(data.categoryId) }, // Convert to number before sending
      status: data.status,
      action: data.action || "Pending",
    };
    console.log(formattedData);

    dispatch(addQuestion(formattedData));
    reset();
    document.getElementById("closeModal").click();
  };

  return (
    <div
      className="modal fade"
      id="addQuestionModal"
      tabIndex="-1"
      aria-labelledby="addQuestionModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="addQuestionModalLabel">
              Add New Question
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              id="closeModal"
            ></button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-body">
              {/* Question Field */}
              <div className="mb-3">
                <label className="form-label">Question</label>
                <input
                  type="text"
                  className={`form-control ${errors.question ? "is-invalid" : ""}`}
                  {...register("question", { required: "Question is required", minLength: 5 })}
                />
                {errors.question && (
                  <div className="invalid-feedback">{errors.question.message}</div>
                )}
              </div>

              {/* Category Dropdown */}
              <div className="mb-3">
                <label className="form-label">Category</label>
                <select
                  className={`form-select ${errors.categoryId ? "is-invalid" : ""}`}
                  {...register("categoryId", { required: "Category is required" })}
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                {errors.categoryId && (
                  <div className="invalid-feedback">{errors.categoryId.message}</div>
                )}
              </div>

              {/* Status (Radio Buttons) */}
              <div className="mb-3">
                <label className="form-label">Status</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      {...register("status", { required: "Status is required" })}
                      value="Published"
                    />
                    <label className="form-check-label">Published</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      {...register("status", { required: "Status is required" })}
                      value="Draft"
                    />
                    <label className="form-check-label">Draft</label>
                  </div>
                </div>
                {errors.status && (
                  <div className="text-danger">{errors.status.message}</div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQuestionModal;