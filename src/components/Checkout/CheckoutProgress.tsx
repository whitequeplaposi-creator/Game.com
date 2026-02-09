'use client';

import React from 'react';
import { CheckoutStep } from '@/types/checkout';
import styles from './CheckoutProgress.module.css';

interface CheckoutProgressProps {
  currentStep: CheckoutStep;
  completedSteps: CheckoutStep[];
}

const steps = [
  { id: CheckoutStep.CART, label: 'Kundvagn', number: 1 },
  { id: CheckoutStep.LOGIN, label: 'Inloggning', number: 2 },
  { id: CheckoutStep.SHIPPING_ADDRESS, label: 'Leverans', number: 3 },
  { id: CheckoutStep.SHIPPING_METHOD, label: 'Frakt', number: 4 },
  { id: CheckoutStep.PAYMENT, label: 'Betalning', number: 5 },
  { id: CheckoutStep.REVIEW, label: 'Granska', number: 6 },
  { id: CheckoutStep.CONFIRMATION, label: 'Bekräftelse', number: 7 },
];

export default function CheckoutProgress({ currentStep, completedSteps }: CheckoutProgressProps) {
  const currentStepIndex = steps.findIndex((step) => step.id === currentStep);

  const getStepStatus = (stepId: CheckoutStep, index: number) => {
    if (completedSteps.includes(stepId)) return 'completed';
    if (stepId === currentStep) return 'active';
    if (index < currentStepIndex) return 'completed';
    return 'upcoming';
  };

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBar}>
        {steps.map((step, index) => {
          const status = getStepStatus(step.id, index);
          const isLast = index === steps.length - 1;

          return (
            <React.Fragment key={step.id}>
              <div className={styles.stepWrapper}>
                <div
                  className={`${styles.stepCircle} ${styles[status]}`}
                  aria-current={status === 'active' ? 'step' : undefined}
                >
                  {status === 'completed' ? (
                    <svg
                      className={styles.checkIcon}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <span className={styles.stepNumber}>{step.number}</span>
                  )}
                </div>
                <div className={styles.stepLabel}>
                  <span className={`${styles.labelText} ${styles[status]}`}>
                    {step.label}
                  </span>
                </div>
              </div>

              {!isLast && (
                <div
                  className={`${styles.stepLine} ${
                    index < currentStepIndex ? styles.completed : ''
                  }`}
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile version - simplified */}
      <div className={styles.progressMobile}>
        <div className={styles.mobileText}>
          Steg {currentStepIndex + 1} av {steps.length}
        </div>
        <div className={styles.mobileBar}>
          <div
            className={styles.mobileProgress}
            style={{ width: `${((currentStepIndex + 1) / steps.length) * 100}%` }}
          />
        </div>
        <div className={styles.mobileLabel}>{steps[currentStepIndex]?.label}</div>
      </div>
    </div>
  );
}
