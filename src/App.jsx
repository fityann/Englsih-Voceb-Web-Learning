import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import MainLayout from './components/layout/MainLayout';

// Pages
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import CourseList from './pages/CourseList';
import CourseDetail from './pages/CourseDetail';
import LessonDetail from './pages/LessonDetail';
import QuizPage from './pages/QuizPage';
import QuizDetail from './pages/QuizDetail';
import CertificatePreview from './pages/CertificatePreview';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />

        {/* Protected/Internal Routes wrapped with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/lessons/:lessonId" element={<LessonDetail />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/quiz/:categoryId" element={<QuizDetail />} />
          <Route path="/certificate" element={<CertificatePreview />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
