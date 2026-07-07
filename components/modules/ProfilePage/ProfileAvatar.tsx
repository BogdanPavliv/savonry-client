import { ChangeEvent, useEffect, useState } from "react";
import axios from "@/lib/utils/axios";
import styles from "@/styles/profile/index.module.scss";

const ProfileAvatar = ({ avatar }: { avatar: string | undefined }) => {
  const [preview, setPreview] = useState<string>("");

  // 🔁 ОНОВЛЕННЯ preview, коли avatar змінюється (наприклад, після логіну)
  useEffect(() => {
    if (avatar) {
      setPreview(`http://localhost:3002/${avatar}`);
    }
  }, [avatar]);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Попередній перегляд ще до завантаження
    const localUrl = URL.createObjectURL(file);
    setPreview(localUrl);

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const { data } = await axios.post("/auth/upload-avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Оновлення preview після відповіді бекенду (якщо потрібно)
      setPreview(`http://localhost:3002${data.avatar}`);
    } catch (error) {
      console.error("Помилка при завантаженні аватара", error);
    }
  };

  return (
    <div className={styles.profile__avatar}>
      <div className={styles.profile__avatar_image}>
        {preview ? (
          <img
            src={preview}
            alt="Avatar"
            className={styles.profile__avatar_img}
          />
        ) : (
          <div className={styles.profile__avatar_placeholder}>No avatar</div>
        )}
      </div>
      <label className={styles.profile__avatar_label}>
        Змінити аватар
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className={styles.profile__avatar_input}
        />
      </label>
    </div>
  );
};

export default ProfileAvatar;
