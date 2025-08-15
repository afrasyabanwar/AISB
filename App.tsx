
import React, { useState } from 'react';
import AuthPage from './features/auth/AuthPage';
import DashboardPage from './features/dashboard/DashboardPage';
import VoiceAssistantUI from './features/assistant/VoiceAssistantUI';
import AdminDashboardPage from './features/admin/AdminDashboardPage';
import { User } from './types';

function App(): React.ReactNode {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState<'student' | 'admin'>('student');

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    // Set initial view based on role, but default to student if not admin.
    setCurrentView(user.role === 'Admin' ? 'admin' : 'student');
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };
  
  const handleSwitchView = () => {
      // This logic is safe because the button to trigger it will only be shown to Admins.
      setCurrentView(prevView => prevView === 'student' ? 'admin' : 'student');
  }

  return (
    <div className="min-h-screen bg-background text-textPrimary font-sans">
      {currentUser ? (
        <>
          {currentView === 'student' ? (
            <DashboardPage onLogout={handleLogout} onSwitchToAdmin={handleSwitchView} user={currentUser} />
          ) : (
            <AdminDashboardPage onLogout={handleLogout} onSwitchToStudent={handleSwitchView} user={currentUser} />
          )}
          <VoiceAssistantUI />
        </>
      ) : (
        <AuthPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;