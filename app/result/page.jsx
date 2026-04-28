"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAI } from "../../actions/getAI";

const scoreMap = {
    goal: {
        "emergency-fund": 1,
        "buying-a-house": 2,
        "retirement": 3,
        "wealth-growth": 4,
        "education-fund": 2,
    },
    risk: {
        "sell-immediately": 1,
        "wait-and-monitor": 2,
        "buy-more": 3,
    },
    horizon: {
        "less-one": 1,
        "one-three": 2,
        "three-five": 3,
        "more-five": 4,
    },
    knowledge: {
        "beginner": 1,
        "intermediate": 2,
        "advanced": 3,
    },
    saving: {
        "less-five": 1,
        "five-one": 2,
        "more-one": 3,
    },
};

function calculateScore(data) {
    return (
        (scoreMap.goal[data.goal] || 0) +
        (scoreMap.risk[data.risk] || 0) +
        (scoreMap.horizon[data.horizon] || 0) +
        (scoreMap.knowledge[data.knowledge] || 0) +
        (scoreMap.saving[data.saving] || 0)
    );
}

function getInvestorType(score) {
    if (score <= 8) return "Conservative";
    if (score <= 13) return "Moderate";
    return "Aggressive";
}

export default function ResultPage() {
    const [riskScore, setRiskScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);

    useEffect(() => {
        const runAnalysis = async () => {
            try {
                const savedData = localStorage.getItem("assessment");

                if (!savedData) {
                    setLoading(false);
                    return;
                }

                const stored = JSON.parse(savedData);

                const score = calculateScore(stored);
                const normalizedScore = Math.round((score / 17) * 100);
                const type = getInvestorType(score);

                setTimeout(() => {
                    setRiskScore(normalizedScore);
                }, 500);

                let chart = {};
                if (type === "Aggressive") {
                    chart = { stocks: 70, bonds: 20, cash: 10 };
                } else if (type === "Moderate") {
                    chart = { stocks: 50, bonds: 30, cash: 20 };
                } else {
                    chart = { stocks: 30, bonds: 50, cash: 20 };
                }

                const prompt = `
You are a financial mentor AI for beginner investors.

Based on this user profile:
- investor type: ${type}
- score: ${normalizedScore}
- goal: ${stored.goal}
- knowledge: ${stored.knowledge}

Respond ONLY in plain text.
Do NOT add any introduction or explanation.
Use EXACTLY this format:

DESCRIPTION: <one short sentence about the investor type>
INSIGHT: <one short personalized investment advice>
LEARNING:
- <most important learning topic 1>
- <most important learning topic 2>
- <most important learning topic 3>
- <most important learning topic 4>
- <most important learning topic 5>
`;

                const aiResult = await getAI(prompt);

                const responseText = aiResult.text || "";

                const descriptionMatch = responseText.match(/DESCRIPTION:(.*)/i);
                const insightMatch = responseText.match(/INSIGHT:(.*)/i);

                const investorDescription =
                    descriptionMatch?.[1]?.trim() ||
                    "Balanced growth with manageable risk.";

                const insight =
                    insightMatch?.[1]?.trim() ||
                    "";

                const learningSection = responseText.match(
                    /LEARNING:([\s\S]*)/i
                );

                const learningPoints =
                    learningSection?.[1]
                        ?.split("\n")
                        .map((item) =>
                            item
                                .replace(/^-/, "")
                                .trim()
                                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        )
                        .filter(Boolean)
                        .slice(0, 5) || [];

                setResult({
                    investorType: type,
                    investorDescription,
                    riskMeter: score,
                    chart,
                    insight,
                    learningPoints,
                });
            } catch (error) {
                console.error("Analysis failed:", error);
            } finally {
                setLoading(false);
            }
        };

        runAnalysis();
    }, []);

    if (loading) return <p>Analyzing ...</p>;

    return (
        <div>
            <div className="results-container">
                <section className="investor-type-card">
                    <h2 className="text-4xl font-bold mb-4">Your Investment Personality</h2>
                    <p className="max-w-2xl opacity-90">Based on your responses, here is your personalized investment profile</p>
                </section>

                <div className="result-card risk-card">
                    <h3 className="font-bold text-(--primary-color) text-xl mb-2">{result.investorType}</h3>
                    <p className="text-sm text-(--second-color) -500">{result.investorDescription}</p>
                </div>

                <div className="result-card risk-card">
                    <h3 className="font-bold text-(--primary-color) text-xl mb-2">Risk Tolerance</h3>
                    <p className="text-sm text-(--second-color)-500">{result.riskMeter}/17</p>
                    <div className="risk-meter-container">
                        <div className="risk-bar"></div>
                        <div className="risk-pointer" style={{ left: `${riskScore}%` }}></div>
                        <div className="flex justify-between mt-4 text-xs font-bold text-(--second-color)-400">
                            <span>Conservative</span>
                            <span>Moderat</span>
                            <span>Aggressive</span>
                        </div>
                    </div>
                </div>

                <div className="result-card chart-card">
                    <h3 className="font-bold text-(--primary-color) text-xl mb-4">Recommended Allocation</h3>

                    {(() => {
                        const { stocks, bonds, cash } = result.chart;

                        const maxValue = Math.max(stocks, bonds, cash);

                        const maxLabel =
                            maxValue === stocks
                                ? "Stocks"
                                : maxValue === bonds
                                    ? "Bonds"
                                    : "Cash";

                        return (
                            <div className="flex items-center gap-8">
                                <div className="w-32 h-32 rounded-full border15 border-[#F3731F] border-l-(--primary-color) flex items-center justify-center" style={{
                                    background: `conic-gradient(
                                #082042 0% ${result.chart.stocks}%, 
                                #F3731F ${result.chart.stocks}% ${result.chart.stocks + result.chart.bonds}%, 
                                #F3C531 ${result.chart.stocks + result.chart.bonds}% 100%
                            )`,
                                }}>
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center px-2">
                                        <span>
                                            {maxValue}% <br /> {maxLabel}
                                        </span>
                                    </div>
                                </div>
                                <ul className="text-sm space-y-2">
                                    <li className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-(--primary-color)"></span> Stocks: {stocks}%
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-[#F3731F]"></span> Bonds: {bonds}%
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-[#F3C531]"></span> Cash: {cash}%
                                    </li>
                                </ul>
                            </div>
                        );
                    })()}
                </div>

                <div className="result-card insight-card">
                    <h3 className="font-bold text-(--primary-color) mb-3">Key Insights</h3>
                    <p className="text-(--second-color)-600 text-sm leading-relaxed">
                        {result.insight}
                    </p>
                </div>

                <div className="result-card learning-card">
                    <h3 className="font-bold text-(--primary-color) mb-3">Next Learning Path</h3>
                    <ul className="space-y-3">
                        {result.learningPoints.map((point, index) => (
                            <li
                                key={index}
                                className="flex items-center text-sm gap-2 text-(--second-color)-600"
                                dangerouslySetInnerHTML={{ __html: `• ${point}` }}
                            />
                        ))}
                    </ul>
                </div>
            </div>

            <div className="cta-result">
                <Link href="/assessment" className="btn-primary px-8 py-4 rounded-xl font-bold">
                    Retake Assessment
                </Link>
            </div>
        </div>
    );
}