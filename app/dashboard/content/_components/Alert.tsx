import React from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from 'lucide-react';

function AlertComponent() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <div>
        <AlertTitle>Copied</AlertTitle>
        <AlertDescription>
          Your AI-generated content has been copied successfully.
        </AlertDescription>
      </div>
    </Alert>
  );
}

export default AlertComponent;
