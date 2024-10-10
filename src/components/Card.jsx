const Card = ({ title, fields, onChange }) => {
    console.log(title,'the vlaue');
    
  return (
    <div style={styles.card}>
      <h4>{title}</h4>
      {fields?.map((field, index) => (
        <div key={index} style={styles.field}>
          <label>{field.label}</label>
          <input
            type="text"
            placeholder={field.placeholder}
            onChange={(e) => onChange(field.key, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px",
    backgroundColor: "#fff",
  },
  field: {
    marginBottom: "10px",
  },
};

export default Card;
