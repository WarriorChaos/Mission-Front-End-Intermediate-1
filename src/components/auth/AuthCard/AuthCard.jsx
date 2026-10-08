import './AuthCard.css';

export default function AuthCard({ children }) {
  return (
    <div className="auth-container">
      <div className="auth-card">
        {children}
      </div>
    </div>
  );
}
